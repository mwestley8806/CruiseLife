import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import CruiseHome from "../CruiseHome";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route, } from 'react-router-dom';


const SignIn = (props)=> {

	return (
		<Router>
			<div className="col-md-12">
				<CruiseHome>
					<h1 className="title">Cruise Life</h1>
				</CruiseHome>
				<NavBar />
				<div>
				<Link to = "/" >Go to sign up</Link>
			<form>2
				<label>User Name</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='username' placeholder = 'User Name'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
			</form>
		</div>
			</div>
		</Router>
		
	);

}

export default SignIn;