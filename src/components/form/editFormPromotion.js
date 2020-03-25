import React, { Component, useState } from 'react'
import FormPromotion from './formPromotion';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

export default function EditFormPromotion() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = e => {
        setModalShow(false);
    }

    return (
        <>
            <ButtonToolbar>
                <Button variant="secondary" onClick={() => setModalShow(true)}>Edit</Button>
                <Modal
                    size="lg"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Edit Promotion
                                     </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormPromotion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
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


// export default class editFormPromotion extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//               modalShow: false,
//           }
//       }
//       handleClose = event =>{
//           this.setState({
//               modalShow: false
//           });
//       }
//       render() {
//           return (
//               <div>
//                   <ButtonToolbar>
//                       <Button variant="secondary" onClick={() => this.setState({ modalShow: true })}>Edit</Button>
//                     <Modal
//                           size="lg"
//                           show={this.state.modalShow}
//                           onHide={() => this.setState({ modalShow: false })}
//                           aria-labelledby="example-modal-sizes-title-lg"
//                       >
//                           <Modal.Header closeButton>
//                               <Modal.Title id="example-modal-sizes-title-lg">
//                                   Edit Promotion
//                               </Modal.Title>
//                           </Modal.Header>
//                           <Modal.Body>
//                               <FormPromotion />
//                           </Modal.Body>
//                       <Modal.Footer>
//                       <Button variant="secondary" onClick={this.handleClose}>
//      Cancel
//    </Button>
//    <Button variant="primary" onClick={this.handleClose}>
//      Save Changes
//    </Button>
//                       </Modal.Footer>
//                       </Modal>

//                   </ButtonToolbar>
//               </div>
//           )
//       }
// }
