import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Protfolio from '../Protfolio/Protfolio'

const Profile = () => {
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
                <div className="card-header">
                    <h3>About</h3>
                </div>
                <div className="card-body">
                    <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
                    <span>more</span>
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
    </>
  )
}

export default Profile