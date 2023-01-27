import React from 'react'
import {BsImage} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
const LeftMainContent = () => {
  return (
    <div>
        <div className="card">
            <div className="card-header">
                <h4>NEW POST</h4>
            </div>
            <div className="card-body d-flex align-items-center">
                <div className="input-group">
                    <input className='form-control me-3' type="text" />
                </div>
                <div className="icon d-flex">
                    <BsImage className='me-2'/>
                    <FiSend/>
                </div>
            </div>
        </div>
        <div className="card mt-5">
            <div className="card-header text-right">
                <BiDotsHorizontalRounded/>
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <img style={{width:'50px',height:'50px',borderRedius:'50%'}} src="assets/profile.png" alt="" />
                      <div className="ms-3">
                          <h5>Theresa Steward</h5>
                          <p>iOS developer</p>
                      </div>
                </div>
                <p>
                What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
                </p>
            </div>
        </div>
    </div>
  )
}

export default LeftMainContent