import React, { useContext, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { UserContext } from '../Usercontext';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function FormPromotion() {
    const { user } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);


    const PromotionSchema = yup.object().shape({
        promotionName: yup.string(),
        description: yup.string(),
        telephone: yup.string(),
        url: yup.string(),
        validTime: yup.date(),
        endTime: yup.date(),
        isVisible: yup.boolean(),
        file: yup.mixed().required(),
    });
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    return (
        <>
            <Formik
                validationSchema={PromotionSchema}
                onSubmit={values => {
                    // axios.post(`https://tander-webservice.an.r.appspot.com/promotions`, values, config, "user")
                    //     .then((res, err) => {
                    //         if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
                    //         else {
                    //             console.log(res);
                    //             console.log(res.data);
                    //         }
                    //     })
                    alert(
                        JSON.stringify(
                          { 
                            fileName: values.file.name, 
                            type: values.file.type,
                            size: `${values.file.size} bytes`
                          },
                          null,
                          2
                        )
                      );
                    console.log(values);
                }}
                initialValues={{
                    promotionName: '',
                    description: '',
                    isVisible: false,
                    ownerUsername: user,
                    file: null
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                    values,
                    touched,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik01">
                                    <Form.Label>Promotion Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="promotionName"
                                        placeholder="Enter your promotion name"
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
                                        placeholder="Enter your description"
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
                                        placeholder="Enter your URL"
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
                            <Form.Row>
                                <input id="file" name="file" type="file" onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files[0]);
                                }} className="form-control" />
                            </Form.Row>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )
                }

            </Formik>

        </>
    )
}

