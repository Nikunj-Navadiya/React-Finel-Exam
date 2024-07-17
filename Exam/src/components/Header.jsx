import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{ fontFamily: "cursive", fontSize: "35px", color: "#4F4E4E" }}>Employee Form</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to={"/add"}><button className='btn btn-primary'>Add</button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/"}><button className='btn btn-primary mx-lg-3'>View</button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
