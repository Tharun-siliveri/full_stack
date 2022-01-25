import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Button,NavDropdown,Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cowinLogo from './../assets/images/cowinLogo.svg'
const HeaderNew = () => {
    const navbarStyles = {
        position: 'fixed',
        height: '80px',
        width: '100%'
      }
  return <div style={{...navbarStyles}}>
      <Row>
<div  style={{fontWeight:'bold',background:'#0000002E',...navbarStyles}}>
    <Navbar collapseOnSelect expand="lg" bg="transparent"  variant="dark">
        <Navbar.Brand href="#home"><img src={cowinLogo} style={{height:'60px',paddingLeft:'25px'}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto " style={{paddingLeft:'420px'}}>
            <NavDropdown title="VACCINATION SERVICES" style={{marginTop:'-15px'}}  className="custom_nav_link" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Register Members</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Search Vaccination Center
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Book Vaccination Slots</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Manage Appointment</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Download Certificate</NavDropdown.Item>
            </NavDropdown>
        </Nav>

        <Nav className="mr-auto ">
        <NavDropdown title="PLATFORMS" className="custom_nav_link" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Co-WIN International</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Vaccinator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Department Login</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Verify Certificate</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Vaccination Login</NavDropdown.Item>
            </NavDropdown>
        <NavDropdown title="RESOURCES" className="custom_nav_link" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">How To Get Vaccinated</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Do's and Don'ts
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Overview</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">API Guidelines</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Open API's</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Grievance Guidelines</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="SUPPORT" className="custom_nav_link" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Frequently Asked Quesitions</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Certificate Corrections
            </NavDropdown.Item>
        </NavDropdown>
        <Button variant="primary" size="lg" style={{padding:"10px",backgroundColor:'transparent',fontWeight:'bold'}} active>
            <Link to="/Registration"> Register / Sign In </Link>
        </Button>{' '}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>

</Row> 
  </div>;
};

export default HeaderNew;
