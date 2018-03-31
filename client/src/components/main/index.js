import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import CreateBody from "../CreateBody";

// gather other componets
//import otherComponent from "../otherComponent";

const main = (props) => {
	return( 
		<div>
		<div>
			<CruiseHome>
			<h1 className="title">Cruise Life</h1>
			</CruiseHome>
		</div>
		<div>
		<NavBar>
				<h4 className="Login">Login</h4>
				<h4 className="Login">Create Profile</h4>
			</NavBar>
		</div>
		<div>
			<CreateBody className="create">
				Create Trip
			</CreateBody>
			<CreateBody className="create">
				Planned Trips
			</CreateBody>
		</div>
		</div>
	);
}

export default main;