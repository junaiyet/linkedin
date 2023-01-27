import React, { useState } from 'react'
// import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { getAuth, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../Slices/userSlice';

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [emailerror,setEmailerror] = useState('')
    const [passworderror,setPassworderror] = useState('')
    const [passwordShow,setPasswordShow] = useState(false)
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate()
    let handleEmail=(e)=>{
        setEmail(e.target.value)
        setEmailerror('')
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

        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            signInWithEmailAndPassword(auth, email, password)
            .then((user)=>{
                setSuccess("Login Succefull.");
                // console.log("login user",user.user)
                dispatch(userLoginInfo(user.user))
                localStorage.setItem("userInfo",JSON.stringify(user))
                setTimeout(()=>{
                    navigate('/home')
                },2000)
            })
            // setTimeout(()=>{
            //     navigate('/login')
            // })
            .catch((error) => {
              const errorCode = error.code;
       
              if (errorCode.includes("auth/user-not-found")) {
                     setEmailerror('Email not found');
              }
              if (errorCode.includes("auth/wrong-password")) {
                setPassworderror('Worng Password');
            }
            });
          
        }
    }
    let handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider).then(()=>{
            setTimeout(()=>{
                navigate('/home')
            },2000)
        })

    }
  return (
    <>
<div className='col-md-5 mx-auto' style={{marginTop:"120px"}}>
        <div className="logo">
        <img  src="assets/logo.png" alt="" />
        </div>
        <h2>Login</h2>
        <button onClick={handleGoogleSignIn} className='btn btn-info'>Login Width Google</button>
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
            <span style={{display:'block'}}>Password</span>
            <input onChange={handlePassword} className="form-control" type={passwordShow?"text":"password"} value={password}/>
            {/* {
                passwordShow? 
                <AiOutlineEye onClick={()=>setPasswordShow(!passwordShow)} />
                :
            <AiOutlineEyeInvisible onClick={()=>setPasswordShow(!passwordShow)}/>
            }
        */}
        {
            passworderror &&
            <p>{passworderror}</p>
        }
            </div>
        </div>
        <br />
        <br />
        <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
        <button className='btn btn-primary ms-5'>
            <Link to='/' className='text-white'>Sign id</Link>
        </button>
        {/* <button className='btn btn-primary ms-3 '>
            <Link to='/forgot' className='text-white'>Forgot Password</Link>
        </button> */}

    </div>
    </>
  )
}

export default Login