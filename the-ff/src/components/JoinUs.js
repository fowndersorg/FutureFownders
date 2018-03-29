
import React from 'react';
import JoinUsButton from '../components/JoinUsButton'; 

const JoinUs = () => {
  return (
    <section className="bg home-bg9" id="JoinUs">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">
          <h2 className="black-text">Join Us</h2>
          <p className="col s12 black-text flow-text"> Future Fownders is an immersive program encouraging the development of the entrepreneurial mindset, the cultivation of personal growth, and the establishment of a social network
           <br/>
           <br/>
Our offering spans the realm of product-based businesses, foundational business theory as well as core intangible requirements for entrepreneurs like leadership, teamwork 
          </p>
          </div>
        </div>
        <JoinUsButton/>
      </div>
    </section>
  )
}
export default JoinUs;
