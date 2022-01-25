import React from 'react';
import image1 from './../assets/images/cowinImage1.jpg'
import image2 from './../assets/images/cowinImage2.jpg'
import image3 from './../assets/images/cowinImage3.jpg'
import image4 from './../assets/images/cowinImage4.jpg'
import BackgroundSlider from 'react-background-slider'
import { Row,Col } from 'react-bootstrap';
import { Button,NavDropdown,Nav,Navbar } from 'react-bootstrap';
import cowinLogo from './../assets/images/cowinLogo.svg'
import { Link } from 'react-router-dom';

const CarouselWithHeader = () => {
    const navbarStyles = {
        position: 'fixed',
        height: '80px',
        width: '100%'
      }
    return (
        <>
        <div style={{height:'703px'}}>
            <BackgroundSlider images={[image1, image2, image3 ,image4]} duration={3} transition={2}/>
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


            <Row>
                <Col lg='6'>
                <h1 style={{padding:'50px',paddingTop:'50px'}}>"India is set to defeat Covid-19.Every Indian is making it possible."</h1>
                <h2 style={{paddingLeft:'50px'}}>- PM Narendra Modi</h2>
                <Button variant="primary" size="lg" style={{padding:"10px",margin:"150px 0px 0px 50px",backgroundColor:"white",color:'black'}} active>
                    <Link to="/Registration"> Book Your Slot</Link> 
                </Button>{' '}
                <Button variant="primary" size="lg" style={{padding:"10px",margin:"150px 0px 0px 50px",backgroundColor:'transparent'}} active>
                 Verify Certificate
                </Button>{' '}
                </Col>
                
            </Row>
            
        </div>
        </>
    )
}

export default CarouselWithHeader


