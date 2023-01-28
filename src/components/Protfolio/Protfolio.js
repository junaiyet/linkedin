import React, { useState } from 'react';
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import './Protfolio.css'
import ProtfolioModal from "../ProtfolioModal/ProtfolioModal";
import cover from '../../assets/cover-img.png'
import profile from '../../assets/default.png'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadString,getDownloadURL } from "firebase/storage";

const Protfolio = () => {
    const [show, setShow] = useState(false);
    const storage = getStorage();
    const [image, setImage] = useState('');
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState();
    const auth = getAuth();

    const handleProfileUpload = (e) => {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result );

    };
      reader.readAsDataURL(files[0]);
   
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
          setCropData(cropper.getCroppedCanvas().toDataURL());       
          const storageRef = ref(storage, auth.currentUser.uid);
          const message4 = cropper.getCroppedCanvas().toDataURL();
          uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        
          getDownloadURL(storageRef).then((downloadURL) => {
            console.log('File available at', downloadURL);
          });
});
        }
      };
      const handleClose = () =>{
        setShow(false);
     } 
      const handleShow = () =>{
        setShow(true); 
        setImage('')
        setCropData('')
        setCropper('')

        } 
  return (
    <>
        <div className="protfolio">
            <div className="cover_img ">
                <img style={{width:'100%',height:'130px'}} src={cover} alt="" />
                <BiDotsHorizontalRounded class="dot-icon" onClick={handleShow}  />
            </div>
            <div className="main_item w-100">
                <div className="main_profile" >
                    <img className='img-fluid' style={{width: '100px',borderRadius:'50%'}} src={profile} alt="" />
                </div>
                <div className="content text-dark">
                      <h3>Dmitry Kargaev</h3>
                      <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</p>
                </div>
            </div>
        </div>
      
     <ProtfolioModal getCropData={getCropData} auth={auth} profile={profile} image={image} setCropper={setCropper} Cropper={Cropper} show={show} handleClose={handleClose} handleProfileUpload={handleProfileUpload} />


    </>
  )
}

export default Protfolio