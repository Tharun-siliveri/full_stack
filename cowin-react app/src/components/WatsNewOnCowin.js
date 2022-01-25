import React from 'react'
import { Row,Col,Accordion } from 'react-bootstrap'

const WatsNewOnCowin = () => {
    return (
        <div className='watsNewOnCowin' >
            <Row>
                <Col lg="3">
                    <h2 style={{fontSize:'36px'},{paddingLeft:'75px'}}>What's New On Cowin?</h2>
                </Col>
                <Col className='watsNewOnCowinRight' lg="9">
                    <Accordion >
                        <Accordion.Item className='accordionItem' eventKey="0">
                            <Accordion.Header>HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose</Accordion.Header>
                            <Accordion.Body  >
                            From 10th January 2022 precaution dose is available for HCW/FLW and Senior Citizens, 39 weeks after date of second dose.Precaution dose is available for now, for those who have taken Covaxin or Covishield.Citizens in 60+ age group having co-morbidity should avail precaution dose on medical advice.Appointments can be booked from 8th January 2022.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Vaccine available for age group 15-18 yrs</Accordion.Header>
                            <Accordion.Body>
                Children of age group 15-18 yrs can now register on Co-WIN portal using AADHAAR Card, PAN Card, Unique Disability ID, Ration Card with Photo and School Photo ID Card. Only COVAXIN is approved for this age group currently.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>New feature to Share Your Vaccination Status on different social media platforms</Accordion.Header>
                            <Accordion.Body  >
                                This exciting new feature added to Co-WIN allows you to Share Your Vaccination Status now among your social circle. You need to be fully or partially vaccinated to use this feature.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header> You can download your vaccination certificate for International Travel
                           </Accordion.Header>
                            <Accordion.Body>
                                This new feature allows fully vaccinated citizens to update existing photo identity to passport number and date of birth to get International Travel Certificate.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                             <Accordion.Header>You can register as a foreign national on Co-WIN and get vaccinated
                           </Accordion.Header>
                            <Accordion.Body  >
              New feature has been provided for foreign national. You can easily be vaccinated just by providing your basic details. If you have been administered with Dose 1 vaccine in foreign country, you'll have provide it's details to Vaccinator while going for Vaccination.
                          
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                             <Accordion.Header>Citizens can link their passports to Co-WIN issued certificate by raising an issue in their accounts
                           </Accordion.Header>
                            <Accordion.Body>
                                This is a new feature provided where you can link your passport by entering Passport number. In order to link your passport to the certificate you need to login into your Co-WIN portal and then raise an issue to get your passport linked by clicking on &#8220;Add Passport Details to my vaccination certificate&#8221;
                            
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>Introducing “Raise an Issue” to Co-WIN for all your vaccine certificate and account related issues
                            </Accordion.Header>
                            <Accordion.Body  >
                                You can now get all your Issues related to your Vaccine Certificate at one place. All you need to do is to login to your Co-WIN portal and click on &#8220;Raise an Issue&#8221; . Multiple Issue options are provided. You can raise your concerned issues accordingly.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>  Check your eligibility for Dose 2 by signing in on Co-WIN with your registered mobile number
                          </Accordion.Header>
                            <Accordion.Body>
                                Citizens administered with dose 1 can now check their eligibility for Dose 2 by performing a single step.&#8220;Login to your Co-WIN portal&#8221; and there you have your eligibility mention next to your name, highlighted as &#8220;No. of Days left for Dose 2&#8221;.
                           
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                   

                   
                </Col>
            </Row>
        </div>
    )
}

export default WatsNewOnCowin
