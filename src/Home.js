import React from 'react';
import './App.css';
function Home() {
  return(
  <div class='home'>
  <p><h5> Welcome to your new single-page application, built with: </h5></p>
  <ul>
    <li><a class='lang' href='https://nodejs.org/en/'>NodeJS</a> for cross-platform server-side code</li>
    <li><a class='lang' href='https://facebook.github.io/react/'>React</a> for client-side code</li>
    <li><a class='lang' href='http://getbootstrap.com/'>Bootstrap</a> and <a class='lang' href="https://www.w3.org/Style/CSS/Overview.en.html"> CSS3</a> for layout and styling</li>
  </ul>
  <p><h5>To help you get started, we have also set up:</h5></p>
  <ul>
    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled.</li>
  </ul>
  <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
  </div>
  )
};
export default Home;
