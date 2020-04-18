import React, { useState, useContext } from 'react'
import { Form, Col, Button, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import { UserContext } from '../Usercontext';

export default function FormRestaurant() {
    const { user } = useContext(UserContext);
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [url, setUrl] = useState('');
    // const [isBuffet, setBuffet] = useState(false);
    // const [isShabu, setShabu] = useState(false);
    // const [isJapaneseFood, setJapaneseFood] = useState(false);
    // const [isFastFood, setFastFood] = useState(false);

    // const changeNameHandler = e => {
    //     setName(e.target.value);
    // }
    // const changeAddressHandler = e => {
    //     setAddress(e.target.value);
    // }
    // const changeTelHandler = e => {
    //     setTelephone(e.target.value);
    // }
    // const changeURLHandler = e => {
    //     setUrl(e.target.value);
    // }
    // const onChangeBuffet = () => {
    //     setBuffet(!isBuffet);

    // }
    // const onChangeJapan = () => {
    //     setJapaneseFood(!isJapaneseFood);

    // }
    // const onChangeShabu = () => {
    //     setShabu(!isShabu);

    // }
    // const onChangeFastFood = () => {
    //     setFastFood(!isFastFood);

    // }


    // const submitHandle = e => {
    //     // const { history } = this.props;
    //     e.preventDefault();
    //     let checkArray = [];
    //     var sbox = Array.from( document.getElementsByName( "style" ) );
    //     sbox.forEach(v => {
    //         if (v.checked){
    //             checkArray.push(v.value);
    //         }
    //     });

    //     const restaurant = {
    //         name: name,
    //         address: address,
    //         telephone: telephone,
    //         url: url,
    //         catagories: checkArray,
    //         user: user
    //     }

    //     console.log(restaurant);
    //     // axios.post(`https://tander-webservice.herokuapp.com/restaurants`, restaurant)
    //     //     .then(res => {
    //     //         console.log(res);
    //     //         this.setState({ loggedIn: true });
    //     //         history.push('/restaurant')
    //     //     })
    //     //     .catch(err => {
    //     //         console.log(err);
    //     //     })
    // }
    const RestaurantSchema = yup.object().shape({
        restaurantName: yup.string().required('Required'),
        address: yup.string().required('Required'),
        telephone: yup.string().required(),
        url: yup.string().required(),
        FastFood: yup.boolean().required(),
        Hotpot: yup.boolean().required(),
        Japanese: yup.boolean().required(),
        Restaurant: yup.boolean().required(),
        Snacks: yup.boolean().required(),
        SteakHouse: yup.boolean().required(),
        Thai: yup.boolean().required()
      
    });
    return (
        <>
            <Formik
                validationSchema={RestaurantSchema}
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
                    FastFood: false,
                    Hotpot: false,
                    Japanese: false,
                    Restaurant: false,
                    Snacks: false,
                    SteakHouse: false,
                    Thai: false
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik01">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="restaurantName"
                                        placeholder="restaurantName"
                                        value={values.restaurantName}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik02">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        placeholder="Enter your address"
                                        value={values.address}
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
                            <h5>Catagories</h5>
                            <br/>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>FastFood</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="FastFood"
                                        value={values.FastFood}
                                        onChange={handleChange}
                                        checked={values.FastFood}
                                        
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>Hotpot</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="Hotpot"
                                        value={values.Hotpot}
                                        onChange={handleChange}
                                        checked={values.Hotpot}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>Japanese</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="Japanese"
                                        value={values.Japanese}
                                        onChange={handleChange}
                                        checked={values.Japanese}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>Snack</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="isSnacks"
                                        value={values.isSnacks}
                                        onChange={handleChange}
                                        checked={values.isSnacks}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>SteakHouse</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="SteakHouse"
                                        value={values.SteakHouse}
                                        onChange={handleChange}
                                        checked={values.SteakHouse}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="1" controlId="validationFormik03">
                                    <Form.Label>Thai</Form.Label>
                                    <Form.Control
                                        type="checkbox"
                                        name="Thai"
                                        value={values.Thai}
                                        onChange={handleChange}
                                        checked={values.Thai}
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

