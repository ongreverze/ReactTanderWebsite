import React, { Component } from "react";

export default class Login extends Component {
    constructor(props){
        super(props);
            this.state ={
                email: '',
                password: '',
            }
        
    }
    changeEmailHandler = event =>{
        this.setState({
            email: event.target.value,
        })
    }
    changePasswordHandler = event =>{
        this.setState({
            password: event.target.value,
        })
    }
    submitHandler = event => {
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <h3>Sign in</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange = {this.changeEmailHandler} />
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

                <button type="submit" className="btn btn-primary btn-block" onChange = {this.submitHandler}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}