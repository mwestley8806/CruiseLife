import React from 'react';
import "./style.css";
import Button from 'react-bootstrap/lib/Button';

// gather other componets
//import otherComponent from "../otherComponent";

const NavBar = (props) => {
		return(
			<div>

			<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/main">Home</a>
			<a class="navbar-brand" href="/CreateBody">Create Vacation</a>
			<a class="navbar-brand" href="/weather">Weather and Live Cams</a>
			
		
			<ul class="nav navbar-nav">
			<button type="button" class="btn btn-primary" type = 'submit' onClick = {props.handleSubmit}>Sign In</button>
			<button type="button" class="btn btn-primary">Create Account</button>  
			</ul>
		</div>      
    
  </div>
</nav>
</div>

		);
}

export default NavBar;