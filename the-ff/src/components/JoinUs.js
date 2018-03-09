import React from 'react';
import JoinUsButton from '../components/JoinUsButton';

const JoinUs = (props) => {
  return (
    <div className="joinUsBox">
          <h1 className="joinUsTitle">Join Us</h1>
          <p className="joinUsPhrase">
          Future Fownders is a 501(c)(3) youth empowerment and education program based on three core pillars
          </p>
          <p className="joinUsTxt">
          
Our offering spans the realm of product-based businesses, foundational business theory as well as core intangible requirements for entrepreneurs like leadership, teamwork and communication. The result of the education is the development of valuable, practical and effective real-world skills. The program includes educational content, exclusive influencer appearances and hands-on mentorship from top business leaders. So far we have developed programs with Link Charter School, Big Picture Program at East Side High School, People’s Prep Charter, Central High School and secured a partnership for start-up capital with Real World Scholars. 
          </p>
          <JoinUsButton/>
    </div>
  );
};

export default JoinUs;


