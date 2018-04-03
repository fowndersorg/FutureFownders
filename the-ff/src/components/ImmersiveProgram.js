import React from 'react';
import 'materialize-css/dist/js/materialize.js';

const ImmersiveProgram = () => {
  return (
    <section className="bg home-bg8 ">
      <div className="container pd" id="programs">
        <h2 className="white-text">Future Fownders Immersive Program</h2>
      </div>
      <br/>
      <div className="row">
      <section>
        <div className="col s10 m4 left-align white-text">
          <i className="medium material-icons white-text">lightbulb_outline</i>
          <h5>Entrepreneurship</h5>
          <p>
            Entrepreneurship is the consummate expression of self-belief, creativity and  persistence. The principles of entrepreneurship afford our youth the capacity to think ambitiously and to use their authentic voice while nurturing unconventional talents and skill. We encourage our young people to think beyond merely accumulating  material items, to making positive impact to the social construct at medium. 
          </p>
        </div>
        <div className="col s10 m4 left-align white-text">
          <i className="medium material-icons white-text">monetization_on</i>
          <h5>Financial Literacy</h5>
          <p>
            Sharing  positive personal finance principles prior to adulthood helps students understand and improve the impact of their financial decisions, and encourages financial responsibility and empowerment - ultimately benefiting both themselves and their communities.
          </p>
        </div>
        <div className="col s10 m4 left-align white-text">
          <i className="medium material-icons white-text">mood</i>
          <h5>Emotional Intelligence</h5>
          <p>
             Self awareness of one’s inner emotional landscape is the first step in any personal growth pursuit. Emotional intelligence promotes diplomatic social practices and fosters compassion and empathy toward others and cultivates the ability to possess a solution-oriented mindset. 
          </p>
        </div>
        </section>
        <br/>
        <br/>
      </div>

    </section>
  )
}
export default ImmersiveProgram;
