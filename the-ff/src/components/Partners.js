import React from 'react';
import PartnerButton from '../components/PartnerButton';

const Partners = () => {
  return (
    <section className="bg home-bg11 pd-2" id="Partners">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">

          <h2 className="white-text">Future Fownders Partners</h2>
          <p className="col s12 white-text flow-text"> 
 The program includes educational content, exclusive influencer appearances and hands-on mentorship from top People’s Prep Charter, Central High School and secured.
          </p>
          <h4 className="col s12 white-text flow-text center">Schools with our program:</h4>
          </div>
        </div>
       <PartnerButton/>
      </div>
    </section>
  )
}
export default Partners;
