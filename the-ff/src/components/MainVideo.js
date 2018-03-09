

import React from 'react';
import PlayVideo from '../components/PlayVideo';

const MainVideo = () => {
	return (
		<section className="bg home-bg3">
			<div className="container pd-6">
				<div className="row">
					<div className="col s12 left-align">

					<h2 className="white-text">Main Video</h2>
					<p className="white-text flow-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and sc
					</p>
          				<PlayVideo/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default MainVideo;


