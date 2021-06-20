import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Login extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <form className="FormData">
                        <h3 className="title">Login</h3>

                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" placeholder="User name" />
                        </div>                       
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn1">Login</button>
                        <p className="forgot-password text-right">
                            Not registered <a href="#">
                                <Link to="/register">SignUp</Link></a>
                                
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;