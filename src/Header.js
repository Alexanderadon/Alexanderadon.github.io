import React from 'react';
import './App.css';
import Rates from './Rates'
import Nav from './Nav'



class Header extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
       }
    }

  render() {
    return (
      <header className="header">
        <Rates/>
        <Nav />
      </header>
    );
  }
}

export default Header;
