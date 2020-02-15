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
            password:''
        
        };
    }
    changeHandler = event => {
        this.setState({
            username: event.target.value,
            firstname: event.target.value,
            lastname: event.target.value,
            email: event.target.value,
            dob:event.target.value,
            telephone: event.target.value,
            password : event.target.value
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
                    <input type="text" className="form-control" placeholder="Username"  onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name"  onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"  onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control"  onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Telephone Number</label>
                    <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="XXX-XXX-XXXX" onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.changeHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitHandler}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}