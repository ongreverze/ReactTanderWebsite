import React, { useState } from 'react'
import NavbarLoggedin from '../components/navbar/navbarloggedin'
import FormPromotion from '../components/form/formPromotion'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import CardPromotion from '../components/card/cardPromotion'

const Promotion = () => {
    const [modalShow, setModalShow] = useState(false)
    const handleClose = () => setModalShow(false);

    return (
        <>
            <NavbarLoggedin />
            <ButtonToolbar>
                <Button onClick={() => setModalShow(true)} >Add</Button>
                <Modal
                    size="lg"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
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
            <CardPromotion />
        </>
    )
}

export default Promotion



// export default class promotion extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalShow: false,
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <NavbarLoggedin />
//                 <Menubar />
//                 <ButtonToolbar>
//                     <Button onClick={() => this.setState({ modalShow: true })}>Add</Button>
//                     <Modal
//                         size="lg"
//                         show={this.state.modalShow}
//                         onHide={() => this.setState({ modalShow: false })}
//                         aria-labelledby="example-modal-sizes-title-lg"
//                     >
//                         <Modal.Header closeButton>
//                             <Modal.Title id="example-modal-sizes-title-lg">
//                                 Add Promotion
//                             </Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                             <FormPromotion />
//                         </Modal.Body>
//                     </Modal>
//                 </ButtonToolbar>
//             </div>
//         )
//     }
// }
