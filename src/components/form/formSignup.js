import React, { Component, useState } from "react";
import axios from 'axios';
import NavbarLogin from "../navbar/navbar";
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';


export default function SignUp() {
    let history = useHistory();
    // const [username, setUsername] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    // const [birthdate, setBirthdate] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [password, setPassword] = useState('');
    // const [role, setRole] = useState('user');
    // const [owners, setOwners] = useState([]);

    // const changeUsernameHandler = e => {
    //     setUsername(e.target.value);
    // }
    // const changeFirstnameHandler = e => {
    //     setFirstname(e.target.value);
    // }
    // const changeLastnameHandler = e => {
    //     setLastname(e.target.value);
    // }
    // const changeEmailHandler = e => {
    //     setEmail(e.target.value);
    // }
    // const changeDobHandler = e => {
    //     var dateobj = new Date(e.target.value);
    //     setBirthdate(dateobj.toISOString());
    // }
    // const changeTelHandler = e => {
    //     setTelephone(e.target.value);
    // }
    // const changePasswordHandler = e => {
    //     setPassword(e.target.value);
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     const user = {
    //         username : username,
    //         firstname: firstname,
    //         lastname: lastname,
    //         birthdate: birthdate,
    //         email: email,
    //         telephone: telephone,
    //         password: password,
    //         role: role,
    //         owners: []
    //     }

    //     console.log(user)
    //     // axios.post(`https://tander-webservice.herokuapp.com/users`,  user)
    //     // .then((res, err) => {    
    //     //     if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
    //     //     else {
    //     //         console.log(res);
    //     //         console.log(res.data);
    //     //         alert("Sign up success !")
    //     //         history.push(`/sign-in`)
    //     //     }
    //     // })

    //     // axios.get('https://tander-webservice.herokuapp.com/promotions').then( res => {
    //     //     console.log(res);
    //     //     console.log(res.data);
    //     // })
    // }

    const SignupSchema = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        username: yup.string().required()
            .min(4, 'Too Short!')
            .max(10, 'Too Long!'),
        email: yup.string()
            .email('Please enter a valid email')
            .required('Please enter an email'),
        dob: yup.string().required(),
        telephone: yup.string().required(),
        password: yup.string().required(),
        
    });
    return (
        <>
            <NavbarLogin />
            <Formik
                validationSchema={SignupSchema}
                onSubmit={values => {
                    axios.post(`https://tander-webservice.herokuapp.com/users`, values)
                        .then((res, err) => {
                            if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
                            else {
                                console.log(res);
                                console.log(res.data);
                                alert("Sign up success !")
                                history.push(`/sign-in`)
                            }
                        })
                    console.log(values);
                }}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    role: 'user',
                    owners :[]
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <h3>Sign in</h3>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFormik01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                    />

                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                    />


                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            isInvalid={!!errors.username}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik03">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={values.dob}
                                        onChange={handleChange}
                                        isInvalid={!!errors.dob}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationFormik04">
                                    <Form.Label>Telephone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="telephone"
                                        value={values.telephone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.telephone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.telephone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationFormik05">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
            </Formik>

        </>
    );

}
