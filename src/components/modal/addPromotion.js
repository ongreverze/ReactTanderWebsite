import React, { useState } from 'react'
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import FormAddPromotion from '../form/formAddPromotion';


export default function AddPromotion({ restid }) {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = e => {
    setModalShow(false);
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
            <FormAddPromotion restid={restid}/>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    </>
  );
}