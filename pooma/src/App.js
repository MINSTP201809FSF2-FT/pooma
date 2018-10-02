import React, { Component } from 'react';
import logo from './logo.svg';
import NavComponent from './components/Layout/Navbar.js'
import './App.css';
import Footer from './components/Layout/Footer.js'
import Sidebar from './components/Layout/Sidebar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavComponent /> 
          <div className="container">
          <Sidebar />
          </div>
      
         <Footer />
      </div>
    );
  }
}

export default App;
