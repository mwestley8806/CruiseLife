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
			<div>
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
				<div>
				<h3 className="userInfo">
					Welcome! Let's get to cruising!
				</h3>
				</div>
			<div className="trips">
			<a href="/CreateTrip">Create Trip</a>
			</div>
			<div className="trips">
			<a href="/CreateTrip">Planned Trips</a>
			</div>		
			</div>

	);
}

export default CreateBody;