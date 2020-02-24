import React, { Component, useState } from 'react'
import Menubar from '../components/menubar'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormRestaurant from '../components/form/formRestaurant'
import Card from '../components/card'
import {ButtonToolbar,Button,Modal} from 'react-bootstrap';



export default function Restaurant() {
    const [modalShow,setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    return (
        <>
            <NavbarLoggedin/>
                <Menubar/>
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
                    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        </>
    )
}

// export default class restaurant extends Component {
//     render() {
//         return (
//             <div>
                

//             </div>
//         )
//     }
// }
