import React, { Component } from 'react'
import { Card , CardColumns , Button} from 'react-bootstrap';
import EditFormPromotion from '../form/editFormPromotion';

export default class card extends Component {
    render() {
        return (
            <div>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
           <EditFormPromotion/>
          <Button variant="danger" >
            Delete
          </Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <EditFormPromotion/>
                        <Button variant="danger" >
            Delete
          </Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <EditFormPromotion/>
                        <Button variant="danger" >
            Delete
          </Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
           <EditFormPromotion/>
          <Button variant="danger" >
            Delete
          </Button>
                        </Card.Footer>
                    </Card>
                    
                </CardColumns>
            </div>
        )
    }
}