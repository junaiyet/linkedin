import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getDatabase, ref, set, update } from "firebase/database";

const AboutMoadal = ({handleClose,show,setAbout,about,aboutcontent,handleCloseEdit,showEdit}) => {
  const db = getDatabase();
  let handleSubmit=()=>{
    set(ref(db, 'about/'), {
      aboutcontent: about,
    });
  }
  let handleAbout=(e)=>{
    setAbout(e.target.value)
    console.log(setAbout);
  }
  // console.log('asd')
  // push holo id r jonno 
let handleUpdate =()=>{
  update(ref(db, 'about/'), {
    aboutcontent: about,
  });
}
  return (
<>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Modal</Modal.Title>
        </Modal.Header>
           
        <Modal.Body>
        <input type="text" onChange={handleAbout} className='form-control h-75' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>

        </Modal.Footer>
      </Modal>
      
<Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
           
        <Modal.Body>
        <input type="text" onChange={handleAbout}  className='form-control h-75' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>

        </Modal.Footer>
      </Modal>
</>

  )
}

export default AboutMoadal


