import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import CreateTrip from "../CreateTrip";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import {Link} from 'react-router-dom';

// gather other componets
//import otherComponent from "../otherComponent";

const CreateBody = (props) => {
	return(
		<Router>
			<div className="col-md-12">
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
			<div className="trips">
			<a href="/CreateTrip">Create Trip</a>
			</div>
			<div className="trips">
			<a href="/CreateTrip">Planned Trips</a>
			</div>		
			</div>
		</Router>
	);
}

export default CreateBody;