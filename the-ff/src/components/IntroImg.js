import React from 'react';
import DonateButton from '../components/DonateButton';


const IntroImg = () => {
	return (
		<section className="bg home-bg1" id="donate">
			<div className="container pd-5">
				<div className="row">
					<div className="col s12 left-align">

					<h2 className="white-text ff">Future Fownders </h2>
					<p className="col s12 white-text flow-text tablet">Future Fownders aims to cultivate and inspire our next generation of leaders by providing real world education for real world impact.</p>
					<br/>
					<p className="col s12"><DonateButton/></p>
					</div>
				</div>
		 </div>
		</section>
	)
}
export default IntroImg;
