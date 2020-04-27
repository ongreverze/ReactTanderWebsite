import React, { Component } from 'react'
import { Card, CardColumns, Button } from 'react-bootstrap';
import EditFormPromotion from '../form/editFormPromotion';

const CardPromotion = (props) => {
    return (
        <div>
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

        </div>
    )
}
export default CardPromotion;