import React, { Component } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormPromotion from '../components/form/formPromotion'
import { Modal, Button, ButtonToolbar, CardColumns, Card } from 'react-bootstrap';
import CardPromotion from '../components/card/cardPromotion'
import EditFormPromotion from '../components/form/editFormPromotion'
import axios from 'axios';

// const Promotion = () => {
//     const [modalShow, setModalShow] = useState(false);
//     const handleClose = () => setModalShow(false);

//     return (
//         <>

//             <NavbarLoggedin />
//             <ButtonToolbar>
//                 <Button onClick={() => setModalShow(true)} >Add</Button>
//                 <Modal
//                     size="lg"
//                     show={modalShow}
//                     onHide={() => setModalShow(false)}
//                     aria-labelledby="example-modal-sizes-title-lg"
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title id="example-modal-sizes-title-lg">
//                             Add Promotion
//                             </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <FormPromotion />
//                     </Modal.Body>
//                 </Modal>
//             </ButtonToolbar>
//             <CardPromotion />
//         </>
//     )
// }

// export default Promotion



export default class promotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            Promotions: []
        }
    }
    getPromotionsData() {
        axios
            .get('https://tander-webservice.herokuapp.com/promotions')
            .then(res => {
                const data = res.data
                console.log(data)
                const promotions = data.map(u =>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{u.promotionname}</Card.Title>
                                <Card.Text>
                                    {u.description}
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
                this.setState({
                    promotions
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount() {
        this.getPromotionsData()
    }
    render() {
        return (
            <div>
                <NavbarLoggedin />

                <ButtonToolbar>
                    <Button onClick={() => this.setState({ modalShow: true })}>Add</Button>
                    <Modal
                        size="lg"
                        show={this.state.modalShow}
                        onHide={() => this.setState({ modalShow: false })}
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
                    {this.state.promotions}
                </CardColumns>
            </div>
        )
    }
}
