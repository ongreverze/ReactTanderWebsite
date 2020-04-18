import React, { Component, useState } from "react";
import axios from 'axios';
import NavbarLogin from "../navbar/navbar";
import { useHistory } from 'react-router-dom';
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { Formik} from 'formik';
import * as yup from 'yup';


export default function SignUp() {
    let history = useHistory();
    
    const SignupSchema = yup.object().shape({
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
        username: yup.string().required()
            .min(4, 'Too Short!')
            .max(10, 'Too Long!'),
        email: yup.string()
            .email('Please enter a valid email')
            .required('Please enter an email'),
        birthdate: yup.date().required(),
        telephone: yup.string().required(),
        password: yup.string().required(),
        
    });
    return (
        <>
            <NavbarLogin />
            <Formik
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // axios.post(`https://tander-webservice.herokuapp.com/users`, values)
                    //     .then((res, err) => {
                    //         if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
                    //         else {
                    //             console.log(res);
                    //             console.log(res.data);
                    //             alert("Sign up success !")
                    //             history.push(`/sign-in`)
                    //         }
                    //     })
                    console.log(values);
                }}
                initialValues={{
                    firstname: '',
                    lastname: '',
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
                                        name="firstname"
                                        placeholder = "Firstname"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        isValid={touched.firstname && !errors.firstname}
                                    />

                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastname"
                                        placeholder = "Lastname"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        isValid={touched.lastname && !errors.lastname}
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
                                            isValid={touched.lastname && !errors.lastname}
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
                                        name="birthdate"
                                        value={values.birthdate}
                                        onChange={handleChange}
                                        isInvalid={!!errors.birthdate}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationFormik04">
                                    <Form.Label>Telephone Number</Form.Label>
                                    <Form.Control
                                        type="text"
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
