import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const CreateBody = (props) => {
	return(
		<div>
			<div className="create">
				{props.children}
			</div>
			
			
		</div>
	);
}

export default CreateBody;