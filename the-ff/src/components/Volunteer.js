import React from 'react';
import VolunteerForm from '../components/VolunteerForm';

const Volunteer = () => {
  return (
    <section className="bg home-bg14" id="volunteer">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">
          <h5 className="black-text">WE'RE ON A MISSION TO IGNITE TRANSFORMATION FOR A NEW GENERATION. HELP SPREAD THE FLAME!</h5>
          </div>
        </div>
        <VolunteerForm/>
      </div>
    </section>
  )
}
export default Volunteer;
