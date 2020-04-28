import React, { useState } from 'react'
import { Modal, ButtonToolbar, Button } from 'react-bootstrap'
import FormInfoPromotion from '../form/formInfoPromotion'

export default function InfoFormPromotion({ promoId }) {
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
              Info Promotion
                    </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormInfoPromotion promoId={promoId} />
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
