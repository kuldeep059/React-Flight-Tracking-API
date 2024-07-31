import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FlightMap from './Components/FlightMap';

function App() {
  return (
    <div className="app">
      <NavBar />
      <FlightMap />
    </div>
  );
}

export default App;
