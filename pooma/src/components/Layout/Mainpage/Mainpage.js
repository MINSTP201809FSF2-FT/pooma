import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DiscussionList from '../../discussion_list'
class Mainpage extends Component {
  render() {
    return (
      <div className="mainPage">
        <Sidebar />
        <DiscussionList />
      </div>
    );
  }
}

export default Mainpage;
