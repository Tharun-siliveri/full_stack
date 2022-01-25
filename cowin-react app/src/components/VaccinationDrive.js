import React from 'react'
import { Row,Col } from 'react-bootstrap'
import vaccinationDrive from './../assets/images/vaccinationDrive.jpg'
import vDImg1 from './../assets/images/syringe.png'
import vDImg2 from './../assets/images/shield.png'
import vDImg3 from './../assets/images/group.png'
import { Button } from 'react-bootstrap'
const style={
    textSize:'36px',
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:'60px'
}
const styleForImage={
    width:'750px',
    padding:'50px'
}
const styleForIcon={
    width:'50px',
    height:'50px'
}
const styleForDiv={
    height:'100px',
    padding:'60px'
}
const styleForRowH3 ={
    fontWeight:'bold',
    padding:'0px'
}
const styleForButton ={
    padding:'15px',
    marginLeft:'50px',
    marginTop:'180px',
  backgroundColor: '#0E1229'
}
const VaccinationDrive = () => {
    return (
        <div className='vaccinationDrive'>
            <h1 style={style}> India Is Running The World’s Largest Vaccination Drive </h1>
           <Row>
               <Col lg='6'>
                    <img src={vaccinationDrive} style={styleForImage} alt="" />
               </Col>
               <Col lg='6'>
                    <div style={styleForDiv}>
                        <Row>
                            <Col lg='2'>
                                <img src={vDImg1} style={styleForIcon} alt="" />
                             </Col>
                             <Col lg='10'>
                                 <Row style={{fontWight:'bold'}}>
                                 Vaccines Delivered
                                 </Row>
                                 <Row>
                                     <h3 style={styleForRowH3}> 1,53,98,97,951 + 85.03 Lakhs </h3>
                                </Row>
                            </Col>
                         </Row>
                    </div>
                    <div style={styleForDiv}>
                         <Row>
                            <Col lg='2'>
                                <img src={vDImg2} style={styleForIcon} alt="" />
                             </Col>
                             <Col lg='10'>
                                 <Row style={{fontWight:'bold'}}>
                                 Citizens Fully Vaccinated
                                 </Row>
                                 <Row>
                                     <h3 style={styleForRowH3}> 64.04 Crore + 37.06 Lakhs </h3>
                                </Row>
                            </Col>
                         </Row>
                    </div>
                    <div style={styleForDiv}>
                          <Row>
                            <Col lg='2'>
                                <img src={vDImg3} style={styleForIcon} alt="" />
                             </Col>
                             <Col lg='10'>
                                 <Row style={{fontWight:'bold'}}> 
                                 % of Fully Vaccinated
                                 </Row>
                                 <Row>
                                     <h1 style={{fontWeight:'bold'}}>71.47%</h1>
                                </Row>
                            </Col>
                         </Row>
                    </div>
                    <Button variant="primary" size="lg" style={styleForButton} active>
                         View Vaccination Dashboard
                    </Button>{' '}    
               </Col>
           </Row>
        </div>
    )
}

export default VaccinationDrive
