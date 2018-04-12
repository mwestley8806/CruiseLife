import React from 'react';
import "./style.css";
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import {Link} from 'react-router-dom';

// gather other componets
//import otherComponent from "../otherComponent";

const CreateTrip = (props) => {
	return(
		<Router>
			<div className="col-md-12">
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
			<div>
			<div className="create2">
				<h1>What Cruise will you be sailing on?</h1>
				<form class="form-inline">
  					<div class="form-group">
    					<label for="exampleInputName2">Cruise Line</label>
    					<input type="text" class="form-control" id="exampleInputName2" placeholder="Cruise Line" />
  					</div>
  					<div class="form-group">
    					<label for="exampleInputName2">Cruise Ship</label>
    					<input type="text" class="form-control" id="exampleInputName2" placeholder="Cruise Ship" />
  					</div>
					  <div class="form-group">
    					<label for="exampleInputName2">Sail Date</label>
    					<input type="text" class="form-control" id="exampleInputName2" placeholder="MM/DD/YYYY" />
  					</div>
  						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
					<br />
					<h1>What interests you Most on a Cruise Vacation?</h1>
					<button type="button" class="btn btn-primary">Culinary</button>
			<button type="button" class="btn btn-primary">Adventure and Exploration</button>
			<button type="button" class="btn btn-primary">Spa and Relaxation</button>
			<button type="button" class="btn btn-primary">Cultural Experiences</button>
			<button type="button" class="btn btn-primary">Shopping</button>
			</div>		
			<div className="create2">
			
			</div>
		</div>		
			</div>
		</Router>
		
	);
}

export default CreateTrip;