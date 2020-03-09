import React, { useState } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormRestaurant from '../components/form/formRestaurant'
import CardRestaurant from '../components/card/cardRestaurant'
import {ButtonToolbar,Button,Modal} from 'react-bootstrap';



export default function Restaurant() {
    const [modalShow,setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    return (
        <>
            <NavbarLoggedin/>

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
            <CardRestaurant/>
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
