import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import shareYourVaccinationStatus from './../assets/images/shareYourVaccinationStatus.jpg'
const ShareYourVaccinationStatus = () => {
    return (
        <div className='shareVaccinationSection shareYourVaccinationStatus'>
           <Row>
                <Col lg="7" style={{padding:"20px"}}>
                    <h1  style={{fontSize:"38px"}}> Share Your Vaccination Status</h1>
                    <h4 style={{fontSize:"24px",margin:"24px 0px",opacity:"80%"}}>
                    Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19.
                    </h4>
                    <Button variant="primary" size="lg" style={{padding:"15px"},{margin:"50px 0px 0px 10px"}} active>
                         Share Your Status
                    </Button>{' '}
                </Col>
                <Col lg="5">
                    <div style={{margin:"50px"},{paddingLeft:"130px"}}>
                        <img src={shareYourVaccinationStatus} style={{height:"540px"},{width:"350px"}} alt="precautionDose image" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShareYourVaccinationStatus
