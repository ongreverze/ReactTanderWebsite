import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props){
        super(props);
            this.state ={
                username: '',
                password: '',
            }
        
    }
    changeUsernameHandler = event =>{
        this.setState({
            username: event.target.value
        })
    }
    changePasswordHandler = event =>{
        this.setState({
            password: event.target.value
        })
    }
    loginHandle = event => {
        event.preventDefault();

        const user = {
            username : this.state.username,
            password : this.state.password
        }
        console.log(user);
        axios.post(`https://tander-webservice.herokuapp.com/users/login`, user)
        .then(res =>{
            console.log(res);
        })

    }

    render() {
        return (
            <form>
                <h3>Sign in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" onChange = {this.changeUsernameHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange = {this.changePasswordHandler} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick = {this.loginHandle}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}