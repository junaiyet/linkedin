import React from 'react'
import project from '../../assets/project.png'
const Projects = () => {
  return (
    <>
    <div className='col-md-3'>
        <img className='img-fluid' src={project} alt="" />
        <div className="content">
            <h6>Zara redesign concept</h6>
            <p>UX/UI design, 15.07.2019</p>
        </div>
    </div>
    <div className='col-md-3'>
        <img className='img-fluid' src={project} alt="" />
        <div className="content">
            <h6>Zara redesign concept</h6>
            <p>UX/UI design, 15.07.2019</p>
        </div>
    </div>
    <div className='col-md-3'>
        <img className='img-fluid' src={project} alt="" />
        <div className="content">
            <h6>Zara redesign concept</h6>
            <p>UX/UI design, 15.07.2019</p>
        </div>
    </div>
    <div className='col-md-3'>
        <img className='img-fluid' src={project} alt="" />
        <div className="content">
            <h6>Zara redesign concept</h6>
            <p>UX/UI design, 15.07.2019</p>
        </div>
    </div>
    </>
  )
}

export default Projects