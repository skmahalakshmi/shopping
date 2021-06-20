import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../css/register.css';
import jsonfile from 'jsonfile';


var file = 'data.json'

var obj = { name: 'JP' }

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ""
            //email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
    }


    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    sendDataSomewhere = function jsonfile(file) {
        jsonfile.writeFile(file, obj, function (err) {
            console.error(err);
        });
    };
    render() {
        return (
            <div>
                <form className="FormData" onSubmit={this.sendDataSomewhere}>
                    <h3 className="title">Register</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn1">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">
                            
                            <Link to="/login">SignIn</Link></a>
                    </p>
                </form>
            </div>
        );
    }
}
export default Register;