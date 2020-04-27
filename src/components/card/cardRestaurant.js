import React, { useState } from 'react'
import { Card, CardColumns, Button } from 'react-bootstrap';
import EditFormRestaurant from '../form/editFormRestaurant';

const CardRestaurant = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{props.u.promotionname}</Card.Title>
                    <Card.Text>
                        {props.promotion.promotion.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <EditFormPromotion />
                    <Button variant="danger" >
                        Delete
          </Button>
                </Card.Footer>
            </Card>

        </>
    )

}
export default CardRestaurant;

