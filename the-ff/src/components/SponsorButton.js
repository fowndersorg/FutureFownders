// Import donate button
import React from 'react';
import { Button } from 'reactstrap';

const SponsorButton = () => {
	return (
		<div className="SponsorButtonBox">
			<Button className="sponsorButton" color="primary">BECOME A SPONSOR</Button>{''}
			<Button className="btn-secondary">LEARN MORE</Button>{''}
		</div>
	)
}

export default SponsorButton;