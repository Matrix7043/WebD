// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Exercise13 from './components/Exercise13';
import Exercise14 from './components/Exercise14';
import Exercise15 from './components/Exercise15';
import Javascript from './components/Javascript';
import Html from './components/Html';
import Css from './components/Css';
import './App.css'; // Add this line to import custom styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>23BCE1351</h1>
          <nav className="main-navigation">
            <ul>
              <li>
                <Link to="/html" className="nav-link">HTML</Link>
              </li>
              <li>
                <Link to="/css" className="nav-link">CSS</Link>
              </li>
              <li>
                <Link to="/javascript" className="nav-link">JavaScript</Link>
              </li>
              <li>
                <Link to="/exercise13" className="nav-link">Exercise 13</Link>
              </li>
              <li>
                <Link to="/exercise14" className="nav-link">Exercise 14</Link>
              </li>
              <li>
                <Link to="/exercise15" className="nav-link">Exercise 15</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="content-container">
          <Routes>
            <Route path="/html" element={<Html/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/javascript" element={<Javascript/>} />
            <Route path="/exercise13" element={<Exercise13/>} />
            <Route path="/exercise14" element={<Exercise14/>} />
            <Route path="/exercise15" element={<Exercise15/>} />
            <Route path="/" element={
              <div className="welcome-section">
                <h2>Web Development Assignments 23BCE1351</h2>
                <p>Please select a section from the navigation above to get started.</p>
              </div>
            } />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>23BCE1351 Sekkappan Vinaitheerthan</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;