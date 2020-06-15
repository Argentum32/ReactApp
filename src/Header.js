import React, { useState,  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.js';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link, NavLink, Switch, BrowserRouter as Router, Route } from 'react-router-dom';


function Header(){
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light ng-white border-bottom box-shadow mb-3">
      <div class="collapse navbar-collapse header" id="navbarTogglerDemo01">
        <NavLink class="navbar-brand" to="/">React App</NavLink>
        <div class="header-nav">
        <ul class="form-inline my-2 my-lg-0 navbar-nav mt-2 mt-lg-0" >
          <li class="nav-item">
            <NavLink class="nav-link" to="/" activeClassName='is-active'> Home </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/counter" activeClassName='is-active'> Counter </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/fetch-data" activeClassName='is-active'> Fetch Data </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;
