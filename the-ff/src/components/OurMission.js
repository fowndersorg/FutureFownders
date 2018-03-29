
import React from 'react';
import ReadMoreButton from '../components/ReadMoreButton';

const OurMission = () => {
  return (
    <section className="bg home-bg12" id="ourMission">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">

          <h2 className="white-text">Our Mission</h2>
          <p className="col s12 white-text flow-text"> Future Fownders is an immersive program 
           <br/>
           <br/>
            Our offering spans the realm of product-based businesses, foundational business theory as well as core intangible requirements for entrepreneurs like leadership, teamwork 
          </p>
          </div>
        </div>
        <ReadMoreButton/>
      </div>
    </section>
  )
}
export default OurMission;
