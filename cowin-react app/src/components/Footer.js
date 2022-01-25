import React from 'react'
import { Row,Col } from 'react-bootstrap'
const styleForH4={
    fontSize:'16px',
    fontWeight:'bold',
    marginBottom:'30px'
}
const styleForA={
    position:'relative',
    textDecoration:'none',
    fontSize:'12px',
    color:'white',
    PaddingTop:'10px',
    padding:'10px 0px',
    marginLeft:'-30px',
    fontWeight:'bold'
}
const styleForLi={
    listStyle:'none',
    marginTop:'12px'
}
const Footer = () => {
    return (
        <div className='footer'>
           <Row>
                <Col lg="2">
                    <h4 style={styleForH4}>Vaccination Services</h4>
                    <ul>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Register Members</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Search Vaccination Centers</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Book Vaccination Slots</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Manage Appointment</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Download Certificate</a>
                        </li>
                    </ul>
                </Col>
                <Col lg="2">
                     <h4 style={styleForH4}>Flatforms</h4>
                     <ul>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Co-Win International</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Vaccinator</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Department Login</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Verify Certificates</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Vaccination Statistics</a>
                        </li>
                    </ul>
                </Col>
                <Col lg="2">
                     <h4 style={styleForH4}>Resources</h4>
                     <ul>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>How To Get Vaccinated</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Dos and Dont's</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Overview</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>API Guidelines </a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Open API's</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Grievance Guidlines</a>
                        </li>
                    </ul>
                </Col>
                <Col lg="2">
                    <h4 style={styleForH4}>Support</h4>
                    <ul>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Frequently Asked Questions</a>
                        </li>
                        <li style={styleForLi}>
                            <a href="" style={styleForA}>Certificate Corrections</a>
                        </li>
                    </ul>
                </Col>
                <Col lg="4">
                    <h4 style={styleForH4}>Contact As</h4>
                    Helpline: +91-11-23978046 (Toll Free - 1075 )
                    <br />
                    Technical Helpline: 0120 4473222
                </Col>
           </Row>
           <Row>
               <Col lg='6'>
               <div>Copyright © 2021 Co-WIN. All Rights Reserved</div>
               </Col>
               <Col lg='6'>
                   <Row>
                       <Col lg='6'>
                       <a href="" style={{textDecoration:'none',color:'white'}}>Terms of Service</a>
                       </Col>
                       <Col lg='6'>
                       <a href="" style={{textDecoration:'none',color:'white'}}>Privacy Policy</a>
                       </Col>
                   </Row>
               </Col>
           </Row>
           
        </div>
    )
}

export default Footer
