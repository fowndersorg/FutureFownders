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

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <IntroImg/>
        <OurWork/>
        <GetEmails/>
        <AboutUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
