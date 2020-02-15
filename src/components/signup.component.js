import React, { Component } from "react";
import "../components/signup.css"

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state={
            username : '',
            firstname: '',
            lastname: '',
            email:'',
            dob:'',
            telephone:'',
            password:'',
            role:"Admin"
        };
    }

    changeUsernameHandler = event => {
        this.setState({
            username: event.target.value,
        });
    }
    changeFirstnameHandler = event => {
        this.setState({
            firstname: event.target.value,
        });
    }
    changeLastnameHandler = event => {
        this.setState({
            lastname: event.target.value,
        });
    }
    changeEmailHandler = event => {
        this.setState({
            email: event.target.value,
        });
    }
    
    changeDobHandler = event => {
        this.setState({
            dob: event.target.value,
        });
    }
    changeTelHandler = event => {
        this.setState({
            telephone: event.target.value,
        });
    }
    changePasswordHandler = event => {
        this.setState({
            password: event.target.value,
        });
    }

    submitHandler = event => {
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"  onChange={this.changeUsernameHandler}/>
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.changeFirstnameHandler}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"  onChange={this.changeLastnameHandler} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  onChange={this.changeEmailHandler} />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control"  onChange={this.changeDobHandler} />
                </div>

                <div className="form-group">
                    <label>Telephone Number</label>
                    <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="xxx-xxx-xxxx" onChange={this.changeTelHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.changePasswordHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}