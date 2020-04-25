import React, { useState , useContext , useEffect } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormRestaurant from '../components/form/formRestaurant'
import { Modal, Button, ButtonToolbar, CardColumns, Card } from 'react-bootstrap';
import {UserContext} from '../components/Usercontext'
import axios from 'axios';
import EditFormRestaurant from '../components/modal/editFormRestaurant';
import AddPromotion from '../components/modal/addPromotion';



export default function Restaurant() {
    const [modalShow,setModalShow] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const handleClose = () => setModalShow(false);

    const getRestaurantsData = () => {
        axios
            .get('https://tander-webservice.an.r.appspot.com/restaurants')
            .then(res => {
                const data = res.data
                console.log(data)
                const restaurants = data.map(items =>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{items.name}</Card.Title>
                                <Card.Text>
                                    {items.address}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <EditFormRestaurant />
                                <AddPromotion/>
                            </Card.Footer>
                        </Card>

                    </div>
                )
                setRestaurants(restaurants);

            })
            .catch((error) => {
                console.log(error)
            })

    }
    useEffect(() => {
        getRestaurantsData()
    }, []);
    return (
        <>
            <NavbarLoggedin/>
            <label>Restaurant</label>
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
                            Add Restaurant
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormRestaurant />
                    </Modal.Body>
                    
                </Modal>
            </ButtonToolbar>
            <CardColumns>
                {restaurants}
            </CardColumns>
        </>
    )
}
