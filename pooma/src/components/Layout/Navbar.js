import React from 'react';
import { Link } from 'react-router-dom';

class NavComponent extends React.Component {
  render() {
    return (
      <nav>
        <div className="navbar navWide">
          <div className="navbar-brand">
            <h2>Pooma</h2>
          </div>
          <div className="wideDiv">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
        <div className="navbar navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.hamburgerToggle} />
          <div className="narrowLinks" ref="narrowLinks">
            <Link to="/About">Link 1</Link>
            <Link to="/OtherStuff">Link 2</Link>
            <Link to="/Test">Link 3</Link>
          </div>
        </div>
      </nav>
    );
  }

  hamburgerToggle = () => {
    let links = this.refs.narrowLinks;
    console.log(links);

    if (links.style.display === 'inline-block') {
      links.style.display = 'none';
    } else {
      links.style.display = 'inline-block';
    }
  };
}

export default NavComponent;

// ReactDOM.render(<NavComponent />, document.getElementById('navbar'))
// registerServiceWorker();
