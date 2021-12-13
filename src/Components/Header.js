import React from 'react'
import logo from "../images/logo.svg"
export default function Header() {

    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="logo">
                    <img src={logo} />
                    <div className="search">
                        <i className="fas fa-search"></i>
                        <input type="search" placeholder="find games" />
                    </div>
                </div>

                <div className="account">
                    <button title="download bluestackX"  className="download"><i className='fas fa-cloud-download-alt'></i></button>
                    <i title="help" className="i fas fa-question"></i>
                    <i title="sign in" className="i fas fa-user"></i>
                    <i className="id fas fa-id-card"></i>
                </div>
                <div class="menu-bar"><i className="fas fa-bars"></i></div>
            </nav>
        </header>

    )
}
