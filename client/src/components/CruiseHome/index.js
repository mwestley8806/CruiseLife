import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const CruiseHome = (props) => {
	return(
		<div className="header">
			<img src={require('./images/Island.jpg')} />
			{props.children}
			
			<i class="fas fa-ship"></i>
		</div>
	);
}

export default CruiseHome; 