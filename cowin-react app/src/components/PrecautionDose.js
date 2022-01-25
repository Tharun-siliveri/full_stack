import React from 'react'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import precautionDose from './../assets/images/precautionDose.jpg'
const PrecautionDose = () => {
    return (
        <div className='shareVaccinationSection precautionDose'>
            <Row>
                <Col lg="7" style={{padding:"20px"}}>
                    <h1  style={{fontSize:"38px",fontWeight:'bold'}}> Get Your Precaution Dose</h1>
                    <h4 style={{fontSize:"24px",margin:"24px 0px",opacity:"80%"}}>
                    Our citizen’s health is our responsibility. Precaution Dose is available for fully vaccinated HCW/FLW and Senior Citizens (60+ yrs) after 39 weeks from 2nd dose. Citizens aged 60 years or more and having co-morbidities, should take precaution dose, only after medical advice. Both online and walk-in available.
                    </h4>
                    <Button variant="primary" size="lg" style={{margin:"50px 0px 0px 10px",backgroundColor:'white'}} active>
                        <Link to='/Registration'> Book Your Slot </Link> 
                    </Button>{' '}
                </Col>
                <Col lg="5">
                    <div style={{paddingLeft:"130px"}}>
                        <img src={precautionDose} style={{height:"540px"},{width:"350px"}} alt="precautionDose image" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PrecautionDose
