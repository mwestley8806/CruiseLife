import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const CreateTrip = (props) => {
	return(
		<div>
			<div className="create">
				<h1>Create Your Vacation</h1>
				<h3>What Part of a Cruise Vacation Interests You the Most?</h3>
			</div>
			<div className="create2">
			<button type="button" class="btn btn-primary">Culinary</button>
			<button type="button" class="btn btn-primary">Adventure and Exploration</button>
			<button type="button" class="btn btn-primary">Spa and Relaxation</button>
			<button type="button" class="btn btn-primary">Cultural Experiences</button>
			<button type="button" class="btn btn-primary">Shopping</button>
			</div>
		</div>
	);
}

export default CreateTrip;