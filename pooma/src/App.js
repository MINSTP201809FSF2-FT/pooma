import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/Layout/Navbar/Navbar';
import './App.css';
// import Discussion from './components/Layout/Discussion';
import Footer from './components/Layout/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mainpage from './components/Layout/Mainpage/Mainpage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Mainpage />
          <div className="container ">{/* <Discussion /> */}</div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
