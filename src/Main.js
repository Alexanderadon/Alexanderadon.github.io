/* eslint-disable react/jsx-pascal-case */
  import React from 'react';
  import './css/main.less';
  import Main__nav from './Main__nav';

class Main extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
        }
    }
 

  render() {
    let nav = this.props.nav;
    return (
      <main className="main"> 
          <Main__nav nav={nav} />
      </main>
    );
  }
}

export default Main;
