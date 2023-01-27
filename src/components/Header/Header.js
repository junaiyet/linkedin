import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="d-flex bg-light align-items-center py-3">
            <div className="logo ms-5">
                <img src="assets/logo.png" alt="" />
            </div>
            <div className="container">
                <div className="col-md-8 row ms-auto">
                    <div className="col-md-6">
                        <div className="" >
                            <label className='me-2'>Search</label>
                        <input type="search" className='from-control' />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="profile me-2">
                            <img style={{width:'42px',height:'42px',borderRedius:'50%'}} src="assets/profile.png" alt="" />
                        </div>
                        <div className="profile_name">
                            <h5>  D. Kargaev</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header