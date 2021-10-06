import React from 'react';
import './App.css';
import logo from "./image/logo1.png";
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom' ;
import Home from './App'

class Nav extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
       }
    }

  render() {
    let nav = {
      'Главная' : '/',
      'Covid-19' : '/covid-19',
      'История' : '/history',
      'Наука' : '/science',
      'Партнеры' : '/partner',
      'О нас' : '/about',
    }
    return (
          <div className="nav__block">
          <div className="container">
            <div className="wrap__nav">
                <div className="content__logo">
                 <a href="/"><img src={logo} alt=""/></a>
                </div>
                <Router>
                <div className="content__nav">
                  <nav >
                    <ul className="nav">
                      {Object.keys(nav).map(elem => {
                        return <li className="nav__link"><a href={nav[elem]}>{elem}</a></li>
                      })}
                    </ul>
                  </nav>
                </div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
    );
  }
}

export default Nav;
