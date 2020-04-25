import React, { useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import FormAddPromotion from '../form/formAddPromotion';
import axios from 'axios';


export default function AddPromotion() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = e => {
        setModalShow(false);
    }
    const sendData = e => {
        // axios.post(`https://tander-webservice.an.r.appspot.com/promotions`, values)
        //     .then((res, err) => {
        //         if (err) console.error(">>>>>>>>>>>>>>>>>>>>>\n" + err)
        //         else {
        //             console.log(res);
        //             console.log(res.data);
        //         }
        //     })
    }
    return (
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
                        <FormAddPromotion />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
          </Button>
                        <Button variant="primary" onClick={sendData}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>

            </ButtonToolbar>
        </>
    );
}