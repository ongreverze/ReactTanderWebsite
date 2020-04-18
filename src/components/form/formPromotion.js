import React, { useState, useContext } from 'react'
import { Form, Col, Button, InputGroup } from 'react-bootstrap'
import axios from 'axios'
import { UserContext } from '../Usercontext';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function FormPromotion() {
    const { user } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);

    const PromotionSchema = yup.object().shape({
        promotionName: yup.string().required('Required'),
        description: yup.string().required('Required'),
        telephone: yup.string().required(),
        url: yup.string().required(),
        validTime: yup.date().required(),
        endTime: yup.date().required(),
        isVisible: yup.boolean().required(),

    });
    return (
        <>
            <Formik
                validationSchema={PromotionSchema}
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
                    promotionName: '',
                    description: '',
                    isVisible: false,
                    ownerUsername: user,
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
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik01">
                                    <Form.Label>Promotion Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="promotionName"
                                        placeholder="Promotionname"
                                        value={values.promotionName}
                                        onChange={handleChange}

                                    />


                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik02">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="description"
                                        placeholder="Enter your description"
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                    <Form.Label>Telephone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="telephone"
                                        value={values.telephone}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                                    <Form.Label>URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="url"
                                        value={values.url}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                                    <Form.Label>ValidTime</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="validTime"
                                        value={values.validTime}
                                        onChange={handleChange}
                                        isValid={touched.validTime && !errors.validTime}
                                        isInvalid={!!errors.validTime}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationFormik03">
                                    <Form.Label>EndTime</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="endTime"
                                        value={values.endTime}
                                        onChange={handleChange}
                                        isInvalid={!!errors.endTime}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>Visible</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="isVisible"
                                        value={values.isVisible}
                                        onChange={handleChange}
                                        checked={values.isVisible}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )
                }

            </Formik>

        </>
    )
}

