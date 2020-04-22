import React, { Component, useState } from 'react'
import FormPromotion from '../form/formPromotion';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

export default function EditFormPromotion() {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = e => {
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
