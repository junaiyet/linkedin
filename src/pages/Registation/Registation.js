import React, { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification ,updateProfile  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/default.png'

const Registation = () => {
    const auth = getAuth();
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [emailerror,setEmailerror] = useState('')
    const [nameerror,setNameerror] = useState('')
    const [passworderror,setPassworderror] = useState('')
    const [passwordShow,setPasswordShow] = useState(false)
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate()
    let handleEmail=(e)=>{
        setEmail(e.target.value)
        setEmailerror('')
    }
    let handleName=(e)=>{
        setName(e.target.value)
        setNameerror('')
    }
    let handlePassword=(e)=>{
        setPassword(e.target.value)
        setPassworderror('')
    }
    let handleSubmit=()=>{
        if (!email) {
            setEmailerror('Email is Requierd')
        }else{
           if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
            setEmailerror('Invalied Email')
           }
        }
        if (!name) {
            setNameerror('Password Is Requierd')
        }
        if (!password) {
            setPassworderror('Password is requierd')
        }
        // else if (!password.length < 8) {
        //     setPassworderror('must 8 carector  ')
        // }
        // else{
        //     if(!/^(?=.*[a-z])/.test(password)){
        //         setPassworderror('Lowercase requierd')
  
        //     }
        // }

        if (email && name && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            createUserWithEmailAndPassword(auth,email,password).then((user)=>{
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "../../assets/default.png"
                  }).then(() => {
                    setSuccess("Registaion Succefull . Please varify your mail");
                    console.log(user);
                    setEmail('')
                    setName('')
                    setPassword('')
                    sendEmailVerification(auth.currentUser)
                    setTimeout(()=>{
                        navigate('/login')
                    })
                  }).catch((error) => {
                    console.log(error)
                  });
               

            }).catch((error) => {
                if (error.code.includes('auth/email-already-in-use')) {
                    setEmailerror("Email already user") ;
                    
                }
              });
        }
    }
    return (
    <div className='col-md-5 mx-auto' style={{marginTop:"120px"}}>
        <div className="logo">
        <img  src="assets/logo.png" alt="" />
        </div>
        <h2>Get started with easily register</h2>
        <p>Free register and you can enjoy it</p>
        { success && 
        <h3>{success}</h3>
        }
        <div className="input-area">
            <div className="from-group">
            <span style={{display:'block'}}>Email</span>
            <input onChange={handleEmail} className="form-control" type="email" value={email} />
            {
                emailerror &&
                <p>{emailerror}</p>
            }
            </div>
            <div className="from-group">
            <span style={{display:'block'}}>Full Name</span>
            <input onChange={handleName} className="form-control" type="text" value={name} />
            {
                nameerror &&
                <p>{nameerror}</p>
            }
          
            </div>
            <div className="from-group">
            <span style={{display:'block'}}>Password</span>
            <input onChange={handlePassword} className="form-control" type={passwordShow?"text":"password"} value={password}/>
            {
                passwordShow? 
                <AiOutlineEye onClick={()=>setPasswordShow(!passwordShow)} />
                :
            <AiOutlineEyeInvisible onClick={()=>setPasswordShow(!passwordShow)}/>
            }
            {
                passworderror &&
                <p>{passworderror}</p>
            }
         
            </div>
        </div>
        <br />
        <br />
        <button className='btn btn-primary' onClick={handleSubmit}>Sign up</button>

    </div>
  )
}

export default Registation