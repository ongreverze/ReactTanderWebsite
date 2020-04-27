import React, { Component, useState, useContext, useEffect } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormPromotion from '../components/form/formPromotion'
import { Modal, Button, ButtonToolbar, CardColumns, Card } from 'react-bootstrap';
import EditFormPromotion from '../components/modal/editFormPromotion'
import axios from 'axios';
import { UserContext } from '../components/Usercontext';

export default function Promotion() {
    const { user, setUser } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    const [promotions, setPromotions] = useState([]);


    const getPromotionsData = () => {
        const token = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        console.log(accessToken);
        if (user === "admin") {
            axios
                .get('https://tander-webservice.an.r.appspot.com/promotions', token
                ).then(res => {
                    const data = res.data
                    console.log(data)
                    const promotions = data.map(items =>
                        <div>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{items.promotionName}</Card.Title>
                                    <Card.Text>
                                        {items.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <EditFormPromotion />
                                    <Button variant="danger"
                                    // onClick={() =>
                                    // axios.delete(`https://tander-webservice.herokuapp.com/promotions/${items._id}`,token)}

                                    >
                                        Delete
                                </Button>
                                </Card.Footer>
                            </Card>

                        </div>

                    )
                    setPromotions(promotions);

                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            axios
                .get('https://tander-webservice.an.r.appspot.com/promotions/myPromotions', token
                ).then(res => {
                    const data = res.data
                    console.log(data)
                    const promotions = data.map(items =>
                        <div>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{items.promotionName}</Card.Title>
                                    <Card.Text>
                                        {items.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <EditFormPromotion />
                                    <Button variant="danger"
                                    // onClick={() =>
                                    // axios.delete(`https://tander-webservice.herokuapp.com/promotions/${items._id}`,token)}

                                    >
                                        Delete
                                </Button>
                                </Card.Footer>
                            </Card>

                        </div>

                    )
                    setPromotions(promotions);

                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }
    useEffect(() => {
        getPromotionsData()
    }, []);
    return (
        <div>
            <NavbarLoggedin />
            <label>Promotion</label>
            <ButtonToolbar>
                <Button onClick={() => setModalShow(true)}>Add</Button>
                <Modal
                    size="lg"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Add Promotion
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormPromotion />
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
            <CardColumns>
                {promotions}
            </CardColumns>
        </div>
    )
}
