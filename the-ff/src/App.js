import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Nav from './components/Navigation';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import GetEmails from './components/GetEmails';
import IntroImg from './components/IntroImg';
import Footer from './components/Footer';
import NewarkSchool from './components/NewarkSchool';
import OurImpact from './components/OurImpact';
import ChancellorSchool from './components/ChancellorSchool';
import NewarkCity from './components/NewarkCity';
import ImmersiveProgram from './components/ImmersiveProgram';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <IntroImg/>
        <OurWork/>
        <GetEmails/>
        <AboutUs/>
        <NewarkSchool/>
        <OurImpact/>
        <ChancellorSchool/>
        <NewarkCity/>
        <br/>
        <ImmersiveProgram/>
        <Footer/>
      </div>
    );
  }
}

export default App;
