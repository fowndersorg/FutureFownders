import React from 'react';

const Team = () => {
  return (

  <section className="pd">
    <h2>MEET THE TEAM</h2>
    <br/>
     <div className="container">
      <div className="row">
        <section>
          <div className="col s6 m4" id="team">
            <img className="teamImg" src="https://farm1.staticflickr.com/895/27340675008_fd76b55e0d_m.jpg"/>
          </div>
          <div className="col s6 m8 left-align teamTxt">
            <h6 className="left-align teamMember">Amanda Johnson</h6>
            <h6 className="left-align">Director</h6>
          </div>
          <div className="col s12 m8 teamTxt">
            <br/>
            <p className="teamText left-align">
              Amanda is the Director of Future Fownders. Since children are our future, we believe that they need to be ready for anything that life throws at them. Throw the Future Fownders program, we help young in our community develop the wisdom to overcome future obstacles that come their way.
            </p>
          </div>
        </section>
      </div>
      <div className="row">
        <section>
          <div className="col s6 m4" id="team">
            <img className="teamImg" src="https://farm1.staticflickr.com/806/41214887751_697e28c12d_m.jpg"/>
          </div>
          <div className="col s6 m8 left-align teamTxt">
            <h6 className="left-align teamMember">Jade Jordan</h6>
            <h6 className="left-align">Operations Assistant</h6>
          </div>
          <div className="col s12 m8 teamTxt">
            <br/>
            <p className="teamText left-align">
              Jade Jordan is the Director of Community Engagement here at Fownders. As the head of community outreach, Jade serves as the point-person for partnering with local community-based organizations in order to help Fownders actively engage with various community partnerships, raise awareness in the city and create a lasting positive impact in the community.
            </p>
          </div>
        </section>
      </div>
     </div>
  </section>
  )
}

export default Team;