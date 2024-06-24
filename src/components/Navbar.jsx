import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../styles/navbar.css';
import { UserContext } from "../App";

const Navbar = () => {
  const {state , dispatch} = useContext(UserContext);

  const RenderMenu = ()=>{
    if(state){
      return (
        <>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/bmi">BMI</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        </>
      )
    }else{
      return (
        <>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/bmi">BMI</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
       
        </>
      )
    }

  }

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand">
      <img src={Logo} alt="" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse main" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <RenderMenu/>
       
      </ul>
      
    </div>
  </nav>
  )
}

export default Navbar