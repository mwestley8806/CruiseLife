import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const CreateBody = (props) => {
	return(
		<div>
			<div className="create">
				<h2>Create a Trip</h2>
			</div>
			<div className="trips">
				<h2>Upcoming Trips</h2>
			</div>
			<a className="create" href="/">
			Create Trip
			</a>
			<a className="trips" href="/">
			Upcoming Trips
			</a>
		</div>
	);
}

export default CreateBody;