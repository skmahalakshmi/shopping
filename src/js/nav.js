import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import Login from './login';
import Register from './register';
import Main from './main';
import '../css/nav.css';




class Navigation extends React.Component {
    render() {
        return (
            <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Organic Food Finder</a>
                   
                  
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">
                                
                                <Link to="/main">Home</Link>
                               </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                <Link to="/login">Login</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                <Link to="/register">Register</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About Us</a>
                            </li>
                        </ul>
                          
                        <span className="navbar-text text-white">
                            Navbar text with an inline element
      </span>
                    
                </div>
                    </nav>
                    <Route path="/main" component={Main} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </Router>
                </div>
        );
    }
}
export default Navigation;