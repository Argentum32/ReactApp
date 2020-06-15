import React, { useState,  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';



function Counter() {
  function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
  	return (
    	<button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }

  function Display(props) {
  	return (
    	<b class="incr" >{props.message}</b>
    );
  }
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
    <div class="counter">
    <h1>Counter</h1><br/>
    <p>This is a simple example of a React component.</p>
    <p>Current count: <Display message={counter}/> </p><br/>
      <div class="but">
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      </div>
    </div>
  );
}
export default Counter;
