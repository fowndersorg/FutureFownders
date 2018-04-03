import React from 'react';
import NewarkSchoolVideo from '../components/NewarkSchoolVideo';

const NewarkSchool = () => {
	return (
		<section className="bg home-bg3">
			<div className="container pd-2">
				<div className="row">
					<div className="col s12 left-align">

					<h2 className="white-text left-align"></h2>
					<p className="white-text left-align NewarkSchoolTxt">
					Future Fownders at Newark's East Side High.
					</p>
          				<NewarkSchoolVideo/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default NewarkSchool;


