import React, { useState, useContext, useEffect } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormPromotion from '../components/form/formPromotion'
import { Modal, Button, ButtonToolbar, CardColumns, Card } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../components/Usercontext';
import InfoFormPromotion from '../components/modal/infoFormPromotion';

export default function Promotion() {
    const { user } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    const [promotions, setPromotions] = useState([]);

    let url = `https://tander-webservice.an.r.appspot.com/promotions${user === "admin" ? '' : "/myPromotions"}`
    const getPromotionsData = () => {
        const token = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        console.log(accessToken);
        axios
            .get(url, token
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
                                <InfoFormPromotion promoId = {items._id}/>
                                <Button variant="danger"
                                    onClick={() =>
                                        axios.delete(`https://tander-webservice.an.r.appspot.com/promotions/id/${items._id}`, token)
                                            .then(res => {
                                                console.log(res);
                                            })
                                            .catch(err => {
                                                console.log(err);
                                            })
                                    }
                                >
                                    Delete
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div >
                )
                setPromotions(promotions);
            })
            .catch((error) => {
                console.log(error)
            })
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
