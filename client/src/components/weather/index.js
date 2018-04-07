import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const weather = (props) => {
	return(
		<div>
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
	);
}

export default weather;