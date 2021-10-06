import React from 'react';
import './css/rates.less';
import dollar from "./image/dollar.png";
import euro from "./image/euro.png";
import ryble from "./image/ryble.png";


class Rates extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      date: '',
      currentcyRate: {} 
    }
    this.currency = ['CAD', 'EUR', 'RUB', ];
    this.getRate();
    }

    getRate = () => {
      fetch( 'http://api.exchangeratesapi.io/v1/latest?access_key=ed8426d661affa8522ec271256f240b7')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ date: data.date});
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({currentcyRate: result});
      });
    }

  render() {
    return (
        <div className="rates">
          <div className="rates__content">
            <div className="img__container">
          <img className="rates__icon"  src={dollar}/>
            </div>
            <div className="img__container">
          <img className="rates__icon"  src={euro}/>
            </div>
            <div className="img__container">
          <img className="rates__icon"  src={ryble}/>
            </div>
            {Object.keys(this.state.currentcyRate).map( (keyName,i)=>
            (
              <div className="rates__block" >
              <p className="rates__value" >{this.state.currentcyRate[keyName].toFixed(2)}</p>
              </div>
             )
            )}
          </div>
          </div>
    );
  }
}

export default Rates;
