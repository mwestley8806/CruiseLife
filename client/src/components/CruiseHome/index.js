import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const CruiseHome = (props) => {
	return(
		<div className="header">
			<img src={require('./images/Island.jpg')} />
			<h1 className="title">Cruise Life</h1>
			<i class="fas fa-ship"></i>
		</div>
	);
}

export default CruiseHome; 