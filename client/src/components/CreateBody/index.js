import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";

// gather other componets
//import otherComponent from "../otherComponent";

const CreateBody = (props) => {
	return(
		<div>
			<div className="create">
				Create Trip
			</div>
			<div className="create">
				Planned Trips
			</div>
			
		</div>
	);
}

export default CreateBody;