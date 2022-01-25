import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import vaccinationForChildren from './../assets/images/vaccinationForChildren.jpg'
const VaccinationForChildren = () => {
    return (
        <div className='shareVaccinationSection vaccinationForChildren'>
            <Row>
                <Col lg="5">
                    <div style={{paddingLeft:"90px"}}>
                        <img src={vaccinationForChildren} style={{width:"350px"}} alt="precautionDose image" />
                    </div>
                </Col>
                <Col lg="7" style={{padding:"20px"}}>
                    <h1  style={{fontSize:"38px"}}> Vaccination for Children</h1>
                    <h4 style={{fontSize:"24px",margin:"24px 0px",opacity:"80%"}}>
                    Protect your child! Getting your children(15-18 yrs) vaccinated is the best thing you can do to protect them from COVID-19. Vaccination slots can now be booked for children aged 15-18 yrs. Both online and walk-in available.
                    </h4>
                    <Button variant="primary" size="lg" style={{margin:"50px 0px 0px 10px",backgroundColor:'white'}} active>
                        <Link to="/Registration"> Book Your Slot </Link> 
                    </Button>{' '}
                </Col>
                
            </Row>
        </div>
    )
}

export default VaccinationForChildren
