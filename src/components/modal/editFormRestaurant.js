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