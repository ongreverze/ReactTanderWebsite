import React, { useState, useContext, useEffect } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormRestaurant from '../components/form/formRestaurant'
import { Modal, Button, ButtonToolbar, CardColumns, Card } from 'react-bootstrap';
import { UserContext } from '../components/Usercontext'
import axios from 'axios';
import AddPromotion from '../components/modal/addPromotion';




export default function Restaurant(props) {
    // context here...
    const { user } = useContext(UserContext);
    const { accessToken } = useContext(UserContext);
    const { idRestaurant, setIdRestaurants } = useContext(UserContext);

    // state here...
    // restaurants state
    const [restaurants, setRestaurants] = useState([]);
    // modal state
    const [openAddRestaurant, setopenAddRestaurant] = useState(false);
    // const [openAddPromotion, setOpenAddPromotion] = useState(false);
    

    const handleClose = () => setopenAddRestaurant(false);
    
    const keepIDRestaurant = (data) => {
        setIdRestaurants(data);
        console.log(idRestaurant);
    }
    const getRestaurantsData = () => {
        const token = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        console.log(accessToken);
        let url = `https://tander-webservice.an.r.appspot.com/restaurants${user === "admin" ? '' : "/myRestaurants"}`

        axios
            .get(url, token)
            .then(res => {
                const data = res.data
                console.log(data)
                const restaurants = data.map((items, index) =>
                        <Card key={index}>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{items.name}</Card.Title>
                                <Card.Text>
                                    {items.address}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {/* <InfoFormRestaurant /> */}
                                {/* <ButtonToolbar>
                                    <Button variant="info" onClick={() => setOpenAddPromotion(true)}>Add Promotion</Button>
                                </ButtonToolbar> */}
                                <AddPromotion restid={items._id} />
                            </Card.Footer>
                        </Card>
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
            <NavbarLoggedin />
            <label>Restaurant</label>
            <ButtonToolbar>
                <Button onClick={() => setopenAddRestaurant(true)}>Add</Button>
                <Modal
                    size="lg"
                    show={openAddRestaurant}
                    onHide={() => setopenAddRestaurant(false)}
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
