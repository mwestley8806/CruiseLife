import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import CreateBody from "../CreateBody";
import Weather from "../weather";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import MainPage from '../MainPage';
import Wrapper from '../Wrapper';


// gather other componets
//import otherComponent from "../otherComponent";

const main = (props) => {
	return( 
		<Router>
			<div className="col-md-12">
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
				<Wrapper>
					<Route exact path="/MainPage" component={MainPage} />
					<Route exact path="/CreateBody" component={CreateBody} />
					<Route exact path="/weather" component={Weather} />
				</Wrapper>
			</div>
		</Router>
	);
}

export default main;