import React, { useState } from 'react';
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import './Protfolio.css'
import ProtfolioModal from "../ProtfolioModal/ProtfolioModal";
import cover from '../../assets/cover-img.png'
import profile from '../../assets/profile_img.png'
const Protfolio = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
  return (
    <>
        <div className="protfolio">
            <div className="cover_img ">
                <img style={{width:'100%',height:'130px'}} src={cover} alt="" />
                <BiDotsHorizontalRounded class="dot-icon" onClick={handleShow}  />
            </div>
            <div className="main_item w-100">
                <div className="main_profile">
                    <img className='img-fluid' src={profile} alt="" />
                </div>
                <div className="content">
                      <h3>Dmitry Kargaev</h3>
                      <p>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</p>
                </div>
            </div>
        </div>
      
     <ProtfolioModal show={show} handleClose={handleClose} />


    </>
  )
}

export default Protfolio