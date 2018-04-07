import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Wrapper = (props) => {
	return(
		<div>
			<main className="wrapper" {...props} />;
		</div>
	);
}

export default Wrapper;