import React from 'react'
import { Row,Col } from 'react-bootstrap'
import raiseAnIssue from './../assets/images/raiseAnIssue.jpg'
const RaiseAnIssue = () => {
    return (
        <div className='raiseAnIssue'>
            <Row>
                <Col lg='6'>
                    <h1 style={{fontWeight:'bold'},{paddingTop:'50px'}}>Raise An Issue</h1>
                    <h5 style={{opacity:'80%'}}>Raise an issue or get solutions to your Co-WIN account and vaccination certificate related issues instantly.</h5>
                    <Row>
                        <Col lg='6'>
                          <a href="" style={{fontSize:'20px'}}>Certificate Corrections</a>
                          <a href="" style={{fontSize:'20px'}}>Report Unknown Member</a>
                          <a href="" style={{fontSize:'20px'}}>Transfer Member To New Number</a>
                        </Col>
                        <Col lg='6'>
                        <a href="" style={{fontSize:'20px'}}>Add Passport <br /></a>
                        <a href="" style={{fontSize:'20px'}}>Merge Certificates</a>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6'>
                    <img src={raiseAnIssue} style={{width:'600px'},{height:'400px'}} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default RaiseAnIssue
