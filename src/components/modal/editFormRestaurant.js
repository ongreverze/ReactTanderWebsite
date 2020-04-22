import React, { useState, Component } from 'react'
import FormRestaurant from '../form/formRestaurant';
import {Button,ButtonToolbar,Modal} from 'react-bootstrap';

export default function EditFormRestaurant () {
    const [modalShow,setModalShow] = useState(false);
    const handleClose = e =>{
        setModalShow(false);
    }
          
                 return (
                     <>
                         <ButtonToolbar>
                             <Button variant="dark" onClick={() => setModalShow(true)}>Edit</Button>
                           <Modal
                                 size="lg"
                                 show={modalShow}
                                 onHide={() => setModalShow(false)}
                                 aria-labelledby="example-modal-sizes-title-lg"
                             >
                                 <Modal.Header closeButton>
                                     <Modal.Title id="example-modal-sizes-title-lg">
                                         Edit Restaurant
                                     </Modal.Title>
                                 </Modal.Header>
                                 <Modal.Body>
                                     <FormRestaurant />
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

// export default class editFormRestaurant extends Component {
//     constructor(props) {
//                super(props);
//                this.state = {
//                      modalShow: false,
//                  }
//              }
//              handleClose = event =>{
//                  this.setState({
//                      modalShow: false
//                  });
//              }
//              render() {
//                  return (
//                      <div>
//                          <ButtonToolbar>
//                              <Button variant="secondary" onClick={() => this.setState({ modalShow: true })}>Edit</Button>
//                            <Modal
//                                  size="lg"
//                                  show={this.state.modalShow}
//                                  onHide={() => this.setState({ modalShow: false })}
//                                  aria-labelledby="example-modal-sizes-title-lg"
//                              >
//                                  <Modal.Header closeButton>
//                                      <Modal.Title id="example-modal-sizes-title-lg">
//                                          Edit Restaurant
//                                      </Modal.Title>
//                                  </Modal.Header>
//                                  <Modal.Body>
//                                      <FormRestaurant />
//                                  </Modal.Body>
//                              <Modal.Footer>
//                              <Button variant="secondary" onClick={this.handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={this.handleClose}>
//             Save Changes
//           </Button>
//                              </Modal.Footer>
//                              </Modal>
                             
//                          </ButtonToolbar>
//                      </div>
//                  )
//              }
// }
