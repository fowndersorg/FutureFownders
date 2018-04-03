import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaEnvelope from 'react-icons/lib/fa/envelope';

export default class Footer extends React.Component {
  render() {
    return (
       <section className="pd-4">
          <section> 
            <div className="row">
              <div className="col s12">
              <a href="#!" className="brand-logo center">
              <img className=" responsive-img center ffooter grey-text" src="https://fownders.s3.us-east-2.amazonaws.com/future-fownders-logo-white.png" width={60}/>
              Future Fownders</a>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <ul className="center black-text">
                  <a href="#ourWork" className="footer grey-text">OUR WORK</a>
                  <a href="#aboutUs" className="footer grey-text">ABOUT</a>
                  <a href="#programs" className="footer grey-text">PROGRAMS</a>
                  <a href="#events" className="footer grey-text">EVENTS</a>
                  <a href="#donate" className="footer grey-text">DONATE</a>
                  <br/>
                  <br/>
                </ul>
              </div>
            </div>
            <hr className="hrBottom center"/>
            <div className="row">
              <div className="col s12 center-align">
               <a href="https://www.instagram.com/futurefownders">
                <FaInstagram className="insta" />
               </a>
               <a href="https://www.FutureFownders@Fownders.org">
                <FaEnvelope className="emailLogo" />
               </a>
               <br/>
               <br/>
               <h6>
                 P.O. Box 200471 Newark, NJ 07102
               </h6>
              </div>
            </div>
          </section>
    </section>
    );
  }
}




         
