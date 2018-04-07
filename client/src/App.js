import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CruiseHome from "./components/CruiseHome";
import NavBar from "./components/NavBar";
import CreateBody from "./components/CreateBody";
import main from "./components/main";
import weather from "./components/weather";
import PersonalTrip from "./components/PersonalTrip";
import CreateTrip from "./components/CreateTrip";
import MainPage from "./components/MainPage";


class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId:"",
      username:"",
      isAuthenticated:false
    }
  };

  componentWillMount(){
    axios.get("/auth/isAuthenticated").then((result)=>{
      const {userId, isAuthenticated,username} = result.data
      this.setState({
        auth:{
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const {name, value} = event.target;    
        // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    }); 
    const {name} = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated){
        const {userId, isAuthenticated,username} = data.data;
        this.setState({
          auth:{
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result)=>{
      this.setState({
        auth:{
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router> 
        <div>
        <Route exact path = "/" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignIn 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          } 
        }}/>
        <Route exact path = "/signup" render = {()=> {
          if(loggedIn){
            return <Redirect to = "/home" />
          } else{
            return <SignUp 
              handleChange= {this.handleChange} 
              handleSubmit = {this.handleSubmit}
              email = {this.state.email}
              password = {this.state.password}
            />
          }  
        }}/>
        <Route exact path = "/home" render = {()=> {
          if(!loggedIn){
            return <Redirect to = "/" />
          } else {
            return <Home handleLogout = {this.handleLogout} auth = { this.state.auth }/>
          } 
        }
        }/>
        <Route exact path = "/CruiseHome" component={CruiseHome} />
        <Route exact path = "/NavBar" component={NavBar} />
        <Route exact path = "/CreateBody" component={CreateBody} />
        <Route exact path = "/weather" component={weather} />
        <Route exact path = "/PersonalTrip" component={PersonalTrip} />
        <Route exact path = "/CreateTrip" component={CreateTrip} />
        <Route exact path = "/main" component={main} />
        <Route exact path = "/MainPage" component={MainPage} />
        
        </div>
      </Router>
    );
  }
}

export default App;