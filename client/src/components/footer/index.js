import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const footer = (props) => {
	return(
		<div>
			<img className="harmony" src={require('./images/harmony.jpg')} />
			<img className="dream" src={require('./images/dream.jpg')} />
			<img className="escape" src={require('./images/escape.jpg')} />
			<img className="radiance" src={require('./images/radiance.jpg')} />
			<img className="vista" src={require('./images/vista.jpg')} />
		</div>
	);
}

export default footer;