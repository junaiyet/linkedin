import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ProtfolioModal = ({show,getCropData,handleClose,handleProfileUpload,Cropper,setCropper,image,profile,auth}) => {


  return (
    <>
          <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div className="input-group">
                <input onChange={handleProfileUpload} type="file" className='form-control'/>
              </div>
              {image ? 
               
              <div className="main_profile" >
                <div className="img-preview mx-auto my-3" style={{width: '100px',borderRadius:'50%',border: '1px solid',height:'100px',overflow:'hidden'}} />
                </div>
               :
              <div className="main_profile" >
               <img className='img-fluid' style={{width: '100px',borderRadius:'50%'}} src={profile} alt="" />
                </div>

            }

              {
                image &&
                <Cropper
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />

              }
              <div className="input-group my-3">
                <input type="text" className='form-control'/>
              </div>
              <div className="input-group">
                <input type="text"className='form-control' />
              </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={getCropData}>Update</Button>
          <Button variant="danger"  onClick={handleClose}>Cancle</Button>
        </Modal.Footer>
      </Modal>

    </>
  
  )
}

export default ProtfolioModal