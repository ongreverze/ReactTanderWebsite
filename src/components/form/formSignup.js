import React, { Component } from "react";
import axios from 'axios';
import { Navbar } from "react-bootstrap";
import NavbarLogin from "../navbar/navbar";


export default class SignUp extends Component {
        state={
            username : '',
            firstname: '',
            lastname: '',
            email:'',
            birthdate: '',
            telephone:'',
            password:'',
            role:"admin",
            owners:[]
        };
    

    changeUsernameHandler = event => {
        this.setState({
            username: event.target.value
        });
    }
    changeFirstnameHandler = event => {
        this.setState({
            firstname: event.target.value
        });
    }
    changeLastnameHandler = event => {
        this.setState({
            lastname: event.target.value
        });
    }
    changeEmailHandler = event => {
        this.setState({
            email: event.target.value
        });
    }
    changeDobHandler = event => {
        var dateobj = new Date(event.target.value);
        this.setState({
            birthdate : dateobj.toISOString()
        });
    }
    changeTelHandler = event => {
        this.setState({
            telephone: event.target.value
        });
    }
    changePasswordHandler = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username : this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            birthdate: this.state.birthdate,
            email: this.state.email,
            telephone: this.state.telephone,
            password: this.state.password,
            role:"admin",
            owners: []
        }
        
        console.log(user)
        axios.post(`https://tander-webservice.herokuapp.com/users`,  user)
        .then((res, err) => {    
            if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
            else {
                console.log(res);
                console.log(res.data);
                alert("Sign up success !")
            }
        })

        // axios.get('https://tander-webservice.herokuapp.com/restaurants').then( res => {
        //     console.log(res)
        // })
    }

    render() {
        return (
            <div>
            <NavbarLogin />
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
                    <input type="date" className="form-control"  onChange={this.changeDobHandler} pattern="yyyy/mm/dd" required/>
                </div>

                <div className="form-group">
                    <label>Telephone Number</label>
                    <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="xxx-xxx-xxxx" onChange={this.changeTelHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.changePasswordHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form></div>
        );
    }
}