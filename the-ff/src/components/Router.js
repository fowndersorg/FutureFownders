import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PlayWhiteBoard from '../components/PlayWhiteBoard';
import VolunteerForm from '../components/VolunteerForm';
import App from '../App';
import Team from '../components/Team';
import Events from '../components/Events';
import OurImpact from '../components/OurImpact';
import NotFound from '../components/NotFound';

const Router =() => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/impact" component={OurImpact}/>
			<Route path="/programs" component={PlayWhiteBoard}/>
			<Route path="/team" component={Team}/>
			<Route path="/events" component={Events}/>
			<Route path="/volunteer" component={VolunteerForm}/>
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
);


export default Router;