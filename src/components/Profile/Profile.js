import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Protfolio from '../Protfolio/Protfolio'
import Button from 'react-bootstrap/Button';
import AboutMoadal from '../AboutModal/AboutMoadal'
import { getDatabase, ref, set ,onValue,remove} from "firebase/database";
import AboutEdit from '../AboutEdit/AboutEdit'

const Profile = () => {
  const db = getDatabase();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const [about,setAbout] = useState('')
  const [aboutcontent,setAboutContent] = useState('')
  useEffect(()=>{
    onValue(ref(db, 'about/'), (snapshot) => {
      let arr= []      
   snapshot.forEach(item=>{
    arr.push(item.val())
    //  console.log(item.key) 
  })
  setAboutContent(arr)
  //     let arr= []
  //  snapshot.forEach(item=>{
    // let about={
    //   id:item.key,
    //   aboutcontent:item.val()
    // }
    //   arr.push(about)
  //  })
  //  setAboutContent(arr)
    });
  },[])

  let handleDelete =(aboutcontent)=>{
    remove(ref('about/'))
    console.log(aboutcontent);
  }

  return (
    <>
  
        <div className="container">
             <div className="col-12">
                <Protfolio/>
             </div>
              <div className="" style={{marginTop:'200px'}}>
                <ul className='list-area'>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/friend'>Friend</NavLink></li>
                    <li><NavLink to='/post'>Post</NavLink></li>
                </ul>
              </div>
              <div className="card mt-4">
                <div className="card-header d-flex justify-content-between">
                    <h3>About</h3>
                    <Button variant="primary" onClick={handleShow} >
                      Add
                   </Button>
                    <Button variant="secondary" onClick={()=>handleShowEdit(aboutcontent)} >
                      Edit
                   </Button>
            <Button variant="danger" onClick={()=>handleDelete(aboutcontent)} >
                      Delete
                   </Button>
                </div>
                <div className="card-body">
                    <p>{aboutcontent} </p>
                    {/* <span>more</span> */}
                </div>
              </div>
              <div className="card mt-4">
                <div className="card-header">
                    <h3>Projects</h3>
                </div>
                <div className="card-body">
                      <div className="row">
                        <Projects/>
                      </div>
                    <span>more</span>
                </div>
              </div>
              <div className="card mt-4">
                    <div className="card-header">
                    <h3>Experience</h3>
                    </div>
                <div className="card-body">
                      <div className="row">
                        <Experience/>
                      </div>
                  
                </div>
              </div>
        </div>

        <AboutMoadal aboutcontent={aboutcontent} about={about} setAbout={setAbout} show={show} handleClose={handleClose}showEdit={showEdit} handleCloseEdit={handleCloseEdit}  />
        {/* <AboutEdit    /> */}
    </>
  )
}

export default Profile