// import React from 'react';
// import DonateButton from '../components/DonateButton';

// const Accomplishments = (props) => {
//   return (
//     <div className="accomplishmentsBox">
//           <h1 className="accomplishmentsTitle">Accomplishments</h1>
//           <p className="accomplishmentsPhrase">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d
//           </p>
//           <p className="accomplishmentsTxt">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc
//           </p>
//           <div className="input.btn-large.cta">
//             <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
//                 <input type="hidden" name="cmd" value="_s-xclick"/>
//                 <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
//                 <input className="donateButton" type="submit" value="DONATE" name="submit" title="PayPal - The safer, easier way to pay online!"/>
//                 <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
//             </form>
//          </div>
//     </div>
//   );
// };

// export default Accomplishments;



import React from 'react';
import DonateButton from '../components/DonateButton';

const Accomplishments = () => {
  return (
    <section className="bg home-bg4">
      <div className="container pd-6">
        <div className="row">
          <div className="col s12 left-align">

          <h2 className="white-text">Accomplishments</h2>
          <p className="white-text flow-text">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d
         <br/>
           <br/>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc
          </p>
           <DonateButton/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Accomplishments;
