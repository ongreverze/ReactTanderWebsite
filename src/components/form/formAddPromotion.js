import React, { useState, useEffect, useContext } from 'react'
import { Form, Table, Button } from 'react-bootstrap'
import axios from 'axios';
import { UserContext } from '../Usercontext';

export default function FormAddPromotion({ restid }) {
    const [promotions, setPromotions] = useState([]);
    const [selectedPromotion, setselectedPromotion] = useState('');
    const [selectedPromotions, setselectedPromotions] = useState([]);
    const { accessToken } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }

    };
    let url = `https://tander-webservice.an.r.appspot.com/promotions${user === "admin" ? '' : "/myPromotions"}`
    const getPromotionsData = () => {
        axios
            .get(url, config)
            .then(res => {
                const data = res.data
                console.log(data)
                // const promotions = data.map((items, key) => {
                //     if (key === 0) setselectedPromotion(items.promotionName)
                //     return <option dataid={items._id} dataname={items.promotionName}
                //         key={key}>{items.promotionName}</option>
                // })
                const promotions = data.map((item, key) => {
                    if (key === 0) setselectedPromotion(item.promotionName)
                    return {
                        id: item._id,
                        name: item.promotionName
                    }
                })
                setPromotions(promotions);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const submitSave = () => {
        const value = {
            "restaurantId": restid,
            "promotions": selectedPromotions
        }
        console.log(value);
        axios.post(`https://tander-webservice.an.r.appspot.com/restaurants/addPromotions`, value ,config 
        ).then(res => {
            console.log(res);
            alert("Add promotion to restaurant success !")
        }).catch((error) => {
            console.log(error)
        })

    }
    const removeItem = (index) => {
        let temp = selectedPromotions.filter((val, idx) => idx !== index)
        setselectedPromotions(temp);
    }
    useEffect(() => {
        getPromotionsData()
    }, []);

    useEffect(() => {
        console.log(selectedPromotions);
    }, [selectedPromotions]);

    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Label>Select Promotion</Form.Label>
                    <Form.Control as="select" size="sm" custom onChange={(e) => setselectedPromotion(e.target.value)} >
                        {promotions.map(({ id, name }, index) => (
                            <option key={index} value={id}>{name}</option>
                        ))}
                    </Form.Control>
                    <Button onClick={() => setselectedPromotions([...selectedPromotions, selectedPromotion])}>Add</Button>
                </Form.Group>
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Promotions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedPromotions.map((selectPromo, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{promotions.find(val => val.id === selectPromo).name}</td>
                                <td><Button variant="danger" onClick={() => removeItem(index)}>X</Button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
            <Button variant="primary" onClick={() => submitSave()}>Save Changes</Button>
        </>
    );
}