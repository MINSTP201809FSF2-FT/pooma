import React, { Component } from 'react';
import logo from './logo.svg';
import NavComponent from './components/Layout/Navbar.js';
import './App.css';
import Discussion from './components/Layout/Discussion';
import DiscussionList from './components/discussion_list'
import Footer from './components/Layout/Footer.js';
import Sidebar from './components/Layout/Sidebar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavComponent />

          <div className="container ">
            <DiscussionList />
            <Sidebar />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
