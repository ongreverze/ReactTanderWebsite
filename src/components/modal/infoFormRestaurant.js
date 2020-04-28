import React, { useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import FormInfoRestaurant from '../form/formInfoRestaurant';

export default function InfoFormRestaurant({ restid }) {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = e => {
        setModalShow(false);
    }

    return (
        <>
            <ButtonToolbar>
                <Button variant="dark" onClick={() => setModalShow(true)}>Info</Button>
                <Modal
                    size="lg"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Info Restaurant
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormInfoRestaurant restid={restid} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                    </Modal.Footer>
                </Modal>
            </ButtonToolbar>
        </>
    )

}