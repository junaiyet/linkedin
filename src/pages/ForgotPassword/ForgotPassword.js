import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail, sendSignInLinkToEmail } from "firebase/auth";



const ForgotPassword = () => {

    const auth = getAuth();
    const [email,setEmail]=useState('')
    const [emailerror,setEmailerror] = useState('')

    let navigate = useNavigate
       
    let handleForgotPassword=()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setEmailerror("Check your Email for Forgot Password");           
            setTimeout(()=>{
                navigate("/login")
            },2000)

        })
        .catch((error) => {
            const errorCode = error.code;
            setEmailerror(errorCode)
        });
     }

  return (
    <div className='bg-secondary w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div className="bg-white p-4">
            <h3>Forgot Password</h3>
            { emailerror && 
            <h3 className='text-infojun'>{emailerror}</h3>
            }
            <label htmlFor="">Enter Your Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" className='form-control' />
     
            <button onClick={handleForgotPassword} className='btn-primary mt-2 me-3'>Update</button>
            <button className='btn-primary mt-2'>
                <Link to='/login'>Back To Home</Link>
            </button>
        </div>
    </div>
  )
}

export default ForgotPassword