import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Article from './Article'
import Sponsor from './Sponsor'
import ClickBait from './ClickBait'
import CB1 from './CB1'
import CB2 from './CB2'
import CB3 from './CB3'
import CB4 from './CB4'

class App extends React.Component {
    render() {
      let i = 0 
    return (
      <div className="App">
        <Header />

      <main className="expanded row">
       <Article/> 
        <Sponsor/>
        <div className="small-12 columns other-articles">
          <h2>From around the Realm</h2>
          <CB1/>
          <CB2/>
          <CB3/>
          <CB4/>
         {/* {this.state.name.map(cBName => <ClickBait name={"small-6 medium-3 columns other-article"} a={"#"} img={this.state.img[i]} alt = {this.state.alt[i]} p={this.state.p[i]} i={i+1} />) 

         }  */}
        </div>
      </main>
      <footer className="expanded row">
        <h6>&copy; 2017 Erebor Industries</h6>
        <h6 className="float-right">All rights reserved</h6>
      </footer>
      </div>
    );
  }
}
export default App;