

import React from 'react';
import PlayVideo from '../components/PlayVideo';

const MainVideo = () => {
	return (
		<section className="bg home-bg3">
			<div className="container pd-2">
				<div className="row">
					<div className="col s12 left-align">

					<h2 className="white-text left-align">Main Video</h2>
					<p className="white-text left-align mainVideoTxt">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</p>
          				<PlayVideo/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default MainVideo;


