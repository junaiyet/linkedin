import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import Protfolio from '../Protfolio/Protfolio'

const Post = () => {
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
        </div>
    </>
  )
}

export default Post