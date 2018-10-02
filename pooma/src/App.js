import React, { Component } from 'react';
import logo from './logo.svg';
import NavComponent from './components/Navbar.js'
import './App.css';
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavComponent /> 
          <div className="container">
          </div>
      
         <Footer />
      </div>
    );
  }
}

export default App;
