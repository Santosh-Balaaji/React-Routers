import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'  // use the Link and NavLink so that the react-router fetches and renders each page without hitting the server everytime on a reload
// WithRouter is the higher order component used to provide additional functionality in this case adding the history to props over here. 
const NavBar =(props)=>{
    console.log(props)
   /* setTimeout(()=>{
        props.history.push('/about') //props.history can be used only inside a single component and cannot be accessed here. Higher ORder components are used to make props use history properties over here.
    },2000);*/
    return (
        <nav className="nav-wrapper red darken-3">
        <div className="container">
        <a className = "brand-logo">Poke'Times</a>
        <ul className ="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        </nav>
    );
}

export default withRouter(NavBar)