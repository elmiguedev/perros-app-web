import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Navbar} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';

import HomePage from './HomePage';

class MainLayout extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Perros</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/perros">Perros</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="container" className="container" style={{paddingTop:'50px'}}>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default MainLayout;

