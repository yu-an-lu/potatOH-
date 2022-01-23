import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Fridge from './components/pages/Fridge';
import Home from './components/pages/Home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/'  element = {<Home/>}/>
          <Route path = '/Fridge' element = {<Fridge/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
