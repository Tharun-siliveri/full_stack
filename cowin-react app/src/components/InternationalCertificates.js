import React from 'react'
import { Row,Col } from 'react-bootstrap'
import internationalCertificate from './../assets/images/internationalCertificate.jpg'
import { Button } from 'react-bootstrap'
const InternationalCertificates = () => {
    return (
        <div className='internationalCertificate' style={{padding:'60px'}}>
            <Row>
                <Col lg="6">
                  <img src={internationalCertificate} style={{height:'900px'},{width:'600px'}} alt="international certificate jpg" />
                  
                </Col>
                <Col lg="6">
                    <h1 style={{paddingTop:'90px'}}>International Travel Certificate</h1>
                    <h5 style={{fontSize:'22px'},{paddingTop:'35px'},{opacity:'80%'}}>Ready to travel the world? Complete your vaccination and get a certificate now.</h5>
                    <Button variant="primary" size="lg" style={{padding:"15px"},{margin:"80px 0px 0px 10px"}} active>
                        How to download
                    </Button>{' '}
                    <Button variant="primary" size="lg" style={{padding:"15px"},{margin:"80px 0px 0px 50px"}} active>
                     Get Certificate
                    </Button>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default InternationalCertificates
