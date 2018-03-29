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
import MainVideo from './components/MainVideo';
import Accomplishments from './components/Accomplishments';
import OurImpact from './components/OurImpact';
import PlayClassroom from './components/PlayClassroom';
import NewarkCity from './components/NewarkCity';
import JoinUs from './components/JoinUs';
import PlayWhiteBoard from './components/PlayWhiteBoard';
import ImmersiveProgram from './components/ImmersiveProgram';
import Partners from './components/Partners';
import OurMission from './components/OurMission';
import Team from './components/Team';
import Volunteer from './components/Volunteer';
import UpcomingEvents from './components/UpcomingEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <IntroImg/>
        <OurWork/>
        <GetEmails/>
        <AboutUs/>
        <MainVideo/>
        <Accomplishments/>
        <OurImpact/>
        <PlayClassroom/>
        <NewarkCity/>
        <JoinUs/>
        <PlayWhiteBoard/>
        <ImmersiveProgram/>
        <Partners/>
        <OurMission/>
        <Team/>
        <Volunteer/>
        <UpcomingEvents/>
        <GetEmails/>
        <Footer/>
      </div>
    );
  }
}

export default App;
