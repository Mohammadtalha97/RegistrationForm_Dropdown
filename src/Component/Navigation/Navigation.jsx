import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class Navigation extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/Dashboard" className="nav-item nav-link">Add Product</Link> 
                            <Link to="/ProductDisplay" className="nav-item nav-link">ProductDisplay</Link>
                            <Link to="/Logout" className="nav-item nav-link">Logout</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;