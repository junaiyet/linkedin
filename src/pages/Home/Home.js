import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Protfolio from '../../components/Protfolio/Protfolio';
import LeftMainContent from '../../components/LeftMainContent/LeftMainContent';

const Home = () => {
  const data = useSelector((state)=>state.userLoginInfo.userInfo);
  const navigate = useNavigate()
  console.log(data);
  useEffect(()=>{
    if (!data) {
      navigate("/login");
    }
  })
  return (
    <div>
    
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">
              <LeftMainContent/>
          </div>
          <div className="col-md-3">
              <Protfolio/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home