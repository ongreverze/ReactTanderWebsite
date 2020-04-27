import React, { useState, useEffect , useContext } from 'react'
import { Form, Table, Button } from 'react-bootstrap'
import axios from 'axios';
import { UserContext } from '../Usercontext';

export default function FormAddPromotion(props) {
    const [promotions, setPromotions] = useState([]);
    const [selectedPromotion, setselectedPromotion] = useState('');
    const [selectedPromotions, setselectedPromotions] = useState([]);
    const { accessToken } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    const getPromotionsData = () => {
        axios
            .get('https://tander-webservice.an.r.appspot.com/promotions/')
            .then(res => {
                const data = res.data
                console.log(data)
                const promotions = data.map((items, key) => {
                    if (key === 0) setselectedPromotion(items.name)
                    return <option dataid={items._id} dataname={items.promotionName}
                     key={key}>{items.promotionName}</option>
                })
                setPromotions(promotions);
                console.log(promotions);
            })
            .catch((error) => {
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
                        {promotions}
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
                        selectedPromotions.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value}</td>
                                <td><Button variant="danger" onClick={() => removeItem(index)}>X</Button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </>
    );
}