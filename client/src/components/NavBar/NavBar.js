import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const NavBar = () => (
	<nav className="navbar navbar-inverse navbar-top">
	  <div className="container-fluid">
		<div className="navbar-header">
		  <button type="button" className="collapsed navbar-toggle">
			<span className="sr-only">Toggle navigation</span>
			<span className="icon-bar" /> <span className="icon-bar" />
			<span className="icon-bar" />
		  </button>
		  <a href="./CruiseHome" className="navbar-brand">
			Home
		  </a>
          <a href="/CreateBody" className="navbar-brand">
			Create Vacation
		  </a>
          <a href="/" className="navbar-brand">
			Cruise Weather
		  </a>
		</div>
	  </div>
	</nav>
  );

export default NavBar;