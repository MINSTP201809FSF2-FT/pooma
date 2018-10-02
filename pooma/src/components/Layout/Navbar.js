import React from 'react';
// import ReactDOM from 'react-dom';
 

export default class NavComponent extends React.Component {
    render() {
        return (
            <nav>
                <div className="navbar navWide">
                    <div className="navbar-brand">
                       <h2>Pooma</h2> 
                    </div>
                    <div className="wideDiv">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.hamburgerToggle}></i>
                    <div className="narrowLinks" ref="narrowLinks">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </nav>
        );
    }

    hamburgerToggle = () => {
        let links = this.refs.narrowLinks;
        console.log(links);
        
        if (links.style.display === 'block') {
            links.style.display = 'none';
        } else {
            links.style.display = 'block';
        }
    }
};

// ReactDOM.render(<NavComponent />, document.getElementById('navbar'))
// registerServiceWorker();
