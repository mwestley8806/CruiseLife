import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route, } from 'react-router-dom';


// gather other componets
//import otherComponent from "../otherComponent";

const weather = (props) => {
	return(
		<Router>
			<div className="col-md-12">
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
				<div className="weather">
				<h1>Weather & Live Webcams</h1>
				<h3>Choose your destination below</h3>
			</div>
			<div className="locations">
					<div class="col-md-4">
					<button type="button" class="btn btn-primary">Nassau, Bahamas</button>
					</div>
					<div class="col-md-4">
					<button type="button" class="btn btn-primary">Nassau, Bahamas</button>
					</div>
					<div class="col-md-4">
					
					<button type="button" class="btn btn-primary">Nassau, Bahamas</button>
					</div>
				</div>	
			</div>
		</Router>
	);
}

export default weather;