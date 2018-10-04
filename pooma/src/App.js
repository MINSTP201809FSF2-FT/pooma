import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/Layout/Navbar/Navbar';
import './App.css';

import Footer from './components/Layout/Footer/Footer.js';
// import Sidebar from './components/Layout/Sidebar/Sidebar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Layout/Mainpage/Mainpage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Mainpage />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
