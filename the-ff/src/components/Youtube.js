import React,{Component} from 'react';

class Youtube extends Component {
	constructor() {
		super();
		this.state = {
			videos: [],
		};
	}

	componentDidMount() {
		console.log(this.state)
		// fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLw1v5oQRa6XyFD8GpwuNprFWgPUGOs9mn')
		fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLw1v5oQRa6XyFD8GpwuNprFWgPUGOs9mn&key=AIzaSyAHLmnEfWmr6-QHvhkxxgyaqwlXeTeL8go')
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data)

			this.setState({videos: data.videos});
		})
	}

	render() {
		console.log(this.state.videos)
		return(
			<div>
				<div className="videos">
					
				</div>
			</div>
		)
	}
	
}

export default Youtube;