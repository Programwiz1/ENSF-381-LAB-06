import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import EngineeringTopics from './EngineeringTopics';

function App() {

  const currentYear = new Date().getFullYear();
  let isLoggedIn = true;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current Year: {currentYear}</p>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

      <Home title="Home Page" description="Welcome to our website." />
      <About title="About Us" description="We are passionate about delivering quality experiences." />
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone." />
      <EngineeringTopics/>
    </div>

    
  );
}

export default App