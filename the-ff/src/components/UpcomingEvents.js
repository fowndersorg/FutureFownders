import React from 'react';
import DonateButton from '../components/DonateButton';
import Nav from '../components/Navigation'


const UpcomingEvents = () => {
	return (
		<section className="bg home-bg15">
			<Nav/>
				<div className="container pd-2" id="events">
					<div className="row">
						<div className="col s12 left-align">
						<h2 className="white-text ff bold">UPCOMING EVENTS</h2>
						</div>
					</div>
				 </div>
		</section>
	)
}
export default UpcomingEvents;
