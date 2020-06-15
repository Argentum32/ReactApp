import React, { useState,  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import FetchData from './FetchData';
import Counter from './Counter';
import Header from './Header';


  function App(){

return  (
  <BrowserRouter >
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/fetch-data" component={FetchData}/>
      </Switch>
    </div>
  </BrowserRouter>)

};

/*class App extends React.Component {
  constructor(props) {
       super(props);
       this.state = {currentCount: 0};
       this.press = this.press.bind(this);
   }
   press(increment){
       this.setState({
         currentCount: this.state.currentCount + this.increment
      });
  }
   render() {
     return (
       <div>
         <h1>Counter</h1>
         <p>This is a simple example of a React component.</p>
         <p>Current count: <strong>{this.state.currentCount}</strong></p>
         <button className="btnIncr one" onClick={this.press}>Increment</button>
         <button className="btnIncr five" onClick={this.press}>Increment</button>
         <button className="btnIncr ten" onClick={this.press}>Increment</button>
         <button className="btnIncr hundred" onClick={this.press}>Increment</button>
       </div>
     );
   }
}
*/

export default App;
