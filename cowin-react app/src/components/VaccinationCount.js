import React, { useState } from 'react'
import vaccine1 from './../assets/images/vaccine.png'
import vaccine2 from './../assets/images/syringe.png'
import { Container,Row,Col } from 'react-bootstrap'
import { useEffect } from 'react'
const VaccinationCount = () => {
    const [tvdcount , settvdcount]=useState(1610474200);
    useEffect(() => {
        const interval = setInterval(() => {
          settvdcount(tvdcount + 1);
        }, 20);

        return () => {
            clearInterval(interval);
          };
        });

        const [vdtcount , setvdtcount]=useState(6163500);
    useEffect(() => {
        const interval = setInterval(() => {
          setvdtcount(vdtcount + 1);
        }, 20);

        return () => {
            clearInterval(interval);
          };
        });

    return (
            <div className='vaccination-count'>
                <Row>
                    <Col lg="6">
                        <Row>
                            <Col lg="2">
                                <div><img src={vaccine1} style={{height:"50px",width:"60px"}}  alt="vaccine" /></div>
                            </Col>

                            <Col lg="10">
                                <h3>Total vaccination Doses</h3>
                                <h3 style={{fontWeight:'bold'}}>{tvdcount}</h3>
                                
                            </Col>
                        </Row>
                        <h5 style={{fontWeight:'bold'}}>India marches beyond 1 Billion Vaccine doses</h5>
                        <h3><a href="" style={{textDecoration:'none',float:'right',paddingRight:'50px'}}>View More</a></h3>
                    </Col>
                    <Col lg="6">
                        <Row>
                            <Col lg="2">
                            <div  ><img src={vaccine2} style={{height:"50px",width:"60px"}} alt="vaccine" /></div>
                            </Col>

                            <Col lg="10">
                           <h3>Vaccinations Done Today</h3> 
                            <h3 style={{fontWeight:'bold'}}>{vdtcount}</h3>
                            </Col>
                        </Row>
                        <h5 style={{fontWeight:'bold'}}>India sets world record of 2.5 Cr+ Vaccinations in a day</h5>
                    </Col>
                </Row>
            </div>
    )

    }

export default VaccinationCount
