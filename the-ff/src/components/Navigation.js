
import React, {Component} from 'react';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';
import DonateButton from "../components/DonateButton";

class Nav extends Component {
  constructor(){
    super();
    this.goToEvents= this.goToEvents.bind(this);
  }

   componentDidMount() {
       $(document).ready(function(){
           $('.button-collapse').sideNav();
       });
   }

   goToEvents(event) {
    event.preventDefault();
    this.props.history.push(`/events`);
   }

   render() {

       return (

          <nav className="transparent z-depth-0">
            <div className="nav-wrapper container transparent">
              <a href="#!" className="brand-logo white-text left">
              <img className="logo responsive-img left" src="https://fownders.s3.us-east-2.amazonaws.com/future-fownders-logo-white.png" width={60}/>
              Future Fownders</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className=" material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down black-text">       
                <li><a href={this.goToEvents} >Our Work</a></li>
                <li><a href="#aboutUs">About Us</a></li>
                <li><a href="#programs">Prgrams</a></li>
                <li><a href="#events">Events</a></li>

                <li><DonateButton/></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li><a href="#ourWork" className="black-text">Our Work</a></li>
                <li><a href="#aboutUs" className="black-text">About Us</a></li>
                <li><a href="#programs" className="black-text">Programs</a></li>
                <li><a href="#events" className="black-text">Events</a></li>
                <li><DonateButton/></li>
              </ul>
            </div>
          </nav>
      );
   }
}

export default Nav;
