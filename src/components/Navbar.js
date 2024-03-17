import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = memo((props) => {
  let date=new Date().toLocaleString();

  const [cDate,setCdate]=useState(date);

  const updateDate=()=>{
    date=new Date().toLocaleString();
    setCdate(date);
  }

  setInterval(updateDate,1000);

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color:"white"}}>NewsDaily</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/business" style={{color:"white"}}> Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/entertainment" style={{color:"white"}}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/health" style={{color:"white"}}>Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/science" style={{color:"white"}}>Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/sports" style={{color:"white"}}>Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/tech" style={{color:"white"}}>Tech</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about" style={{color:"white"}}>About</Link>
                    </li>
                </ul>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-block">
                <li className='nav-item' style={{color:"white"}}>{cDate}</li>
                </ul>
            </div>
        </nav>

    </div>
  )
})

Navbar.propTypes = {}

export default Navbar
