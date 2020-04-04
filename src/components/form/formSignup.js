import React, { Component,useState} from "react";
import axios from 'axios';
import NavbarLogin from "../navbar/navbar";
import { useHistory } from 'react-router-dom';


export default function SignUp () {
    let history = useHistory();
    const [username,setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [birthdate,setBirthdate] = useState('');
    const [telephone,setTelephone] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('user');
    const [owners,setOwners] = useState ([]);
    
 const changeUsernameHandler = e => {
    setUsername(e.target.value);
}
 const changeFirstnameHandler = e => {
    setFirstname(e.target.value);
}
const changeLastnameHandler = e => {
    setLastname(e.target.value);
}
const changeEmailHandler = e => {
    setEmail(e.target.value);
}
const changeDobHandler = e => {
    var dateobj = new Date(e.target.value);
    setBirthdate(dateobj.toISOString());
}
const changeTelHandler = e => {
    setTelephone(e.target.value);
}
const changePasswordHandler = e => {
    setPassword(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();

    const user = {
        username : username,
        firstname: firstname,
        lastname: lastname,
        birthdate: birthdate,
        email: email,
        telephone: telephone,
        password: password,
        role: role,
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
            history.push(`/sign-in`)
        }
    })

    // axios.get('https://tander-webservice.herokuapp.com/promotions').then( res => {
    //     console.log(res);
    //     console.log(res.data);
    // })
}

    return (
        <>
        <NavbarLogin />
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"  onChange={changeUsernameHandler}/>
            </div>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" onChange={changeFirstnameHandler}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name"  onChange={changeLastnameHandler} />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"  onChange={changeEmailHandler} />
            </div>

            <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" className="form-control"  onChange={changeDobHandler} pattern="yyyy/mm/dd" required/>
            </div>

            <div className="form-group">
                <label>Telephone Number</label>
                <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="xxx-xxx-xxxx" onChange={changeTelHandler}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={changePasswordHandler} />
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form></>
    );

}
// export default class SignUp extends Component {
//         state={
//             username : '',
//             firstname: '',
//             lastname: '',
//             email:'',
//             birthdate: '',
//             telephone:'',
//             password:'',
//             role:"admin",
//             owners:[]
//         };
    

//     changeUsernameHandler = event => {
//         this.setState({
//             username: event.target.value
//         });
//     }
//     changeFirstnameHandler = event => {
//         this.setState({
//             firstname: event.target.value
//         });
//     }
//     changeLastnameHandler = event => {
//         this.setState({
//             lastname: event.target.value
//         });
//     }
//     changeEmailHandler = event => {
//         this.setState({
//             email: event.target.value
//         });
//     }
//     changeDobHandler = event => {
//         var dateobj = new Date(event.target.value);
//         this.setState({
//             birthdate : dateobj.toISOString()
//         });
//     }
//     changeTelHandler = event => {
//         this.setState({
//             telephone: event.target.value
//         });
//     }
//     changePasswordHandler = event => {
//         this.setState({
//             password: event.target.value
//         });
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         const user = {
//             username : this.state.username,
//             firstname: this.state.firstname,
//             lastname: this.state.lastname,
//             birthdate: this.state.birthdate,
//             email: this.state.email,
//             telephone: this.state.telephone,
//             password: this.state.password,
//             role:"admin",
//             owners: []
//         }
        
//         console.log(user)
//         // axios.post(`https://tander-webservice.herokuapp.com/users`,  user)
//         // .then((res, err) => {    
//         //     if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
//         //     else {
//         //         console.log(res);
//         //         console.log(res.data);
//         //         alert("Sign up success !")
//         //     }
//         // })

//         axios.get('https://tander-webservice.herokuapp.com/promotions').then( res => {
//             console.log(res);
//             console.log(res.data);
//         })
//     }

//     render() {
//         return (
//             <div>
//             <NavbarLogin />
//             <form>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>Username</label>
//                     <input type="text" className="form-control" placeholder="Username"  onChange={this.changeUsernameHandler}/>
//                 </div>

//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" className="form-control" placeholder="First name" onChange={this.changeFirstnameHandler}/>
//                 </div>

//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name"  onChange={this.changeLastnameHandler} />
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email"  onChange={this.changeEmailHandler} />
//                 </div>

//                 <div className="form-group">
//                     <label>Date of Birth</label>
//                     <input type="date" className="form-control"  onChange={this.changeDobHandler} pattern="yyyy/mm/dd" required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Telephone Number</label>
//                     <input type="tel" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required placeholder="xxx-xxx-xxxx" onChange={this.changeTelHandler}/>
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" onChange={this.changePasswordHandler} />
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit} >Sign Up</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="/sign-in">sign in?</a>
//                 </p>
//             </form></div>
//         );
//     }
// }