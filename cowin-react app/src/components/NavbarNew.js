import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavbarNew = () => {
    const navbarStyles = {
        position: 'fixed',
        width: '100%',
        textAlign: 'center'
      }
    return (
        
        
        <div style={{...navbarStyles}}>
            <nav style={{height:'65px'}} className="navbar navbar-expand-md navbar-dark navbar-sticky ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLeftContent" aria-controls="navbarLeftContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse " id="navbarLeftContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"  href="#"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Verify Certificate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Share Vaccination status</a>
                        </li>
                    </ul>
                </div>
                <div >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/">  Skip To Main Content</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='fontSizeHandler' href="#">A+</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id='fontSizeHandler' href="#">A</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"id='fontSizeHandler' href="#">A-</a>
                        </li>
                        <li className="nav-item">
                            <NavDropdown title="English"   className="custom_nav_link" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Telugu
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Marathi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Malayalam</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Punjabi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gujarati</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bengali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Assamese</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kannada</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Odia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tamil</NavDropdown.Item>
                            </NavDropdown>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    )
}

export default NavbarNew


