import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Protfolio from '../../components/Protfolio/Protfolio';
import LeftMainContent from '../../components/LeftMainContent/LeftMainContent';
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../Slices/userSlice';
const Home = () => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.userLoginInfo.userInfo);
  const navigate = useNavigate()
  const [varify,setVarify] = useState(false);
  // console.log(data);
  onAuthStateChanged(auth,(user)=>{
//  console.log(user);
 if (user.emailVerified) {
     setVarify(true)

 }
  })
  useEffect(()=>{
    if (!data) {  
      navigate("/login");
      dispatch(userLoginInfo(null))
      localStorage.removeItem("userInfo")
    } 

  }, [])
  let handleLogOut =()=>{
       signOut(auth)
       .then(()=>{
        dispatch(userLoginInfo)
        navigate("/login");
       })
  }
  // console.log(auth)
  // console.log(auth.currentUser.emailVerified)
  return (
    <div>
    
        <div className="container mt-5">
          {varify?
        <div className="row">
          <div className="col-md-9">
              <LeftMainContent/>
          </div>
          <div className="col-md-3">
            <Link to='/profile'>
              <Protfolio/>
            </Link>
          </div>
        </div>
  
          :(

            <h1 className='bg-primary p-5 text white w-100 vh-100 ' style={{
              position: 'absolute',
              left: '0',
              top: '0',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffff'
          }}>Please Verify your email</h1>
          )
          }
        </div>
        <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
    </div>
  )
}

export default Home