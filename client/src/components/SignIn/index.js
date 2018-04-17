import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import Foot from "../Foot";
import { BrowserRouter as Router, Route, } from 'react-router-dom';


const SignIn = (props)=> {

	return (
		<Router>
			<div>
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
				<div className = "signin col-md-6">
				
				
			<form>
				<label>User Name</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='username' placeholder = 'User Name'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
			
		</div>
		<div className = "col-md-6">
		<img className = "oasis" src={require('./images/oasis.jpg')} />
		</div>
			</div>
			<Foot />
			
		</Router>
		
	);

}

export default SignIn;