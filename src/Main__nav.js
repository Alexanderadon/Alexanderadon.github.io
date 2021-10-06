
import React from 'react';
import './css/main__nav.less';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Politican from './Politican';
import World from './World';
import Society from './Society';
import Sport from './Sport';
import Incidents from './Incidents';
import Culture from './Culture';
import Health from './Health';
import Internet from './Internet';
import Auto from './Auto';
import Other from './Other';
import Economy from './Economy';

class Main__nav extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      
        }
    }

  render() {
    let nav = this.props.nav;
    return (
      <Router>
      <div className="Main__nav">
        <nav className="nav">
          <ul className="nav__links">
            {Object.keys(nav).map( elem => {
              return <li className="Main__nav__link"><a href={nav[elem]}>{elem}</a></li>  
            })}
         </ul>
        </nav>
        <Switch>
          <Route exact path="/politican" component={Politican} />
          <Route exact path="/world" component={World} />
          <Route exact path="/society" component={Society} />
          <Route exact path="/economy" component={Economy} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/incidents" component={Incidents} />
          <Route exact path="/culture" component={Culture} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/internet" component={Internet} />
          <Route exact path="/auto" component={Auto} />
          <Route component={Other} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Main__nav;
