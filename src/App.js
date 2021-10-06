import React from 'react';
import './css/Style.css';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    let nav = this.props.nav;
    return (
      <div className="App">
      <Header/>
      <Main nav={nav} />
      </div>
    );
  }
}

export default App;
