/* ReactUniversityProjectWebDevelop */
import './App.css';

import MainPage from './main';
import AboutUs from './about'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import { useState } from 'react';


function App() {
        
  return (
    <Router>
    <div className="App" >
     <Header/>
      <Routes>
        <Route  path='/' element={<MainPage />}/>
        <Route exact path='/about' element={<AboutUs/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
