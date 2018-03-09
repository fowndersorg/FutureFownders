import React,{Component} from 'react';

class Eventbrite extends Component {
	constructor() {
		super();
		this.state = {
			events: [],
		};
	}

	componentDidMount() {
		console.log(this.state.events)
		fetch('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=EVKVR2HPVUVRWPG7PI3H')
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data)
			
			this.setState({events: data.events});
		})
	}

	render() {
		console.log(this.state.events)
		let events = this.state.events.map((event) => {
			console.log(event)
			return(
				<div key = {event.id}>
					<div className="eventBox">
						<h1 className="eventTitle">{event.name.text}</h1>
						<img className="eventImg" alt="eventImg" src={event.logo.original.url} width="500" height="400"/>
						<p className="eventTxt">{event.description.text}</p>
						<a href={event.url}>Buy Ticket </a>
					</div>
				</div>
			)
		})
		console.log(events)
		return(
			<div>
				<div className="event">
					{events}
				</div>
			</div>
		)
	}
	
}

export default Eventbrite;