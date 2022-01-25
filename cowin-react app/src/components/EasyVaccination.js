import React from 'react'
import easyVaccination from './../assets/images/easyVaccination.jpg'
import easyVaccination1 from './../assets/images/easyVaccination1.jpg'
import easyVaccination2 from './../assets/images/easyVaccination2.jpg'
import easyVaccination3 from './../assets/images/easyVaccination3.jpg'
import { Card,CardGroup } from 'react-bootstrap'
const style = {
    fontWeight:'bold',
    textDecoration:'none',
    fontSize:'26px'
}

const EasyVaccination = () => {
    return (
        <div className='easyVaccination'>
            <h1 style={{textsize:'36px'}}>Get Vaccinated in 3 Easy Steps</h1>
            <img src={easyVaccination} style={{maxWidth:'100%'}} alt="" />
            {/* 3 cards */}
            <CardGroup>
                <Card style={{padding:'40px'}}>
                    <Card.Title style={{fontWeight:'bold'}}>Book an Appointment on
                          Co-WIN or Walk into any Vaccination Center
                    </Card.Title>
                    <Card.Img variant="top" src={easyVaccination1} />
                    <Card.Body>
                        <Card.Text>
                            <a href="" style={style}>How to Book Your Appointment n Co-Win?</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{padding:'40px'}}>
                    <Card.Title style={{fontWeight:'bold'}}>Get Your Vaccination
                        Safely at the Time of Your Appointment
                    </Card.Title>
                    <Card.Img variant="top" src={easyVaccination2} />
                    <Card.Body>
                        
                        <Card.Text>
                            <a href="" style={style}>Do's and Don'ts for Getting Vaccinated</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{padding:'40px'}}>
                     <Card.Title style={{fontWeight:'bold'}}>Download Your Vaccination
                        Certificate from Co-WIN and Wait for Dose #2

                    </Card.Title>
                    <Card.Img variant="top" src={easyVaccination3} />
                    <Card.Body>
                      
                        <Card.Text>
                            <a href="" style={style}> Download Your Vaccine Certificate</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default EasyVaccination
