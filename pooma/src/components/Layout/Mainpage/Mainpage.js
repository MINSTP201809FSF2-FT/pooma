import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import Discussion from '../Discussion/Discussion';
class Mainpage extends Component {
  render() {
    return (
      <div className="mainPage">
        <Sidebar />
        {/* <Discussion /> */}
      </div>
    );
  }
}

export default Mainpage;
