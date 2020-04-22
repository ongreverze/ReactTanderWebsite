import React, {useState} from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import { UserContext } from '../Usercontext';
import FormAddPromotion from '../form/formAddPromotion';


export default function AddPromotion() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = e => {
        setModalShow(false);
    }
    return(
        <>
        <ButtonToolbar>
                <Button variant="info" onClick={() => setModalShow(true)}>Add Promotion</Button>
                <Modal
                    size="lg"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Manage Promotions
                                     </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormAddPromotion/>
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
    );
}