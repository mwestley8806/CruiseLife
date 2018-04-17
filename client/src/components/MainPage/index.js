import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const MainPage = (props) => {
	return(
		<div>
			<div>
			<div class="col-md-6"  className="mainHold">
				<h2>
					Welcome to Cruise Life! Here you can find people with similar interests who will be sailing with you on your upcoming cruise vacation.
					Simply answer some questions about your vacation interests and be matched with those who like the same things. 
				</h2>
				<h2>
					Get started by creating a profile or logging into yours and set up an upcoming trip.
					Then learn who your matches are and get to connecting.
				</h2>
				<img className="dream" src={require('./images/dream.jpg')} />
				<img className="harmony" src={require('./images/harmony.jpg')} />
				<img className="escape" src={require('./images/escape.jpg')} />
				<img className="vista" src={require('./images/vista.jpg')} />
				<img className="radiance" src={require('./images/radiance.jpg')} />
			</div>
			<div class="col-md-6">
				
			</div>
			</div>
		</div>
	);
}

export default MainPage;