import React, { useState, useContext } from "react";
import axios from "axios";
import NavbarLogin from "../navbar/navbar";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../Usercontext';


export default function LoginPage() {
    let history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const { accessToken, setaccessToken } = useContext(UserContext);
    const { role, setRole } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const changeUsernameHandler = e => {
        setUsername(e.target.value);
    }
    const changePasswordHandler = e => {
        setPassword(e.target.value);
    }

    const loginHandle = e => {

        e.preventDefault();

        const _user = {
            username: username,
            password: password
        }

        console.log(_user);
        axios.post(`https://tander-webservice.an.r.appspot.com/users/login/`, _user)
            .then(res => {
                const _data = res.data.accessToken;
                console.log(res);
                setUser(username);
                setaccessToken(_data);
                history.push(`/restaurant`)
            })
            .catch(err => {
                console.log(err);
                alert("login failed!")
            })


    }


    return (
        <>
            <NavbarLogin />
            <form>
                <h3>Sign in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Enter username" onChange={changeUsernameHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={changePasswordHandler} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <input type="button" value="Submit" className="btn btn-primary btn-block" onClick={loginHandle} />
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
        </>

    );

}