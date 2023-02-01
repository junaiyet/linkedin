import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getDatabase, ref, set } from "firebase/database";

const AboutEdit = ({handleCloseEdit,showEdit}) => {
  return (
 
<Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
           
        <Modal.Body>
        <input type="text"  className='form-control h-75' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" >
            Update
          </Button>

        </Modal.Footer>
      </Modal>
  )
}

export default AboutEdit