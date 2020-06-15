import React, { useState,  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function FetchData (){
  const now = new Date();
  var one = now.setDate(now.getDate() -1);

    var forecasts = [];
    for(var j=0; j<5; j++){
      const rng = Math.random();
      const TemperatureC = ~~(rng*(50)-20);
      const TemperatureF = ~~(32 + TemperatureC*9/5);
      const Summaries = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"];
      const Summary = Summaries[~~(rng*(Summaries.length))];
      const info = [now, TemperatureC, TemperatureF, Summary];
      var one = now.setDate(now.getDate() + 1)

        forecasts.push(
          <tr>
          <td>{info[0].toString()}</td>
          <td>{info[1].toString()}</td>
          <td>{info[2].toString()}</td>
          <td>{info[3].toString()}</td>
          </tr>)
      };
  return (
  <table class="fetch">
  <thead>
  <tr class="forecast-desc">
    <h2> Weather forecast </h2>
  </tr>
  <tr class="forecast-desc">
    <i>This component demonstrates fetching data from the server.</i>
  </tr>
   <br />
    <tr>
      <th>Date</th>
      <th>Temp. (C)</th>
      <th>Temp. (F)</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
  {forecasts}
  </tbody>
  </table>

  )
  }
export default FetchData;
