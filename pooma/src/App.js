import React, { Component } from 'react';
import logo from './logo.svg';
import NavComponent from './components/Navbar.js'
import './App.css';
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pooma!!!!!! RAWR!</h1>
          <NavComponent />
        </header>
        <p className="App-intro">
          OMG! THIS IS GOING TO BE SO FUN!!!!
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
