import React from 'react'
import {Row,Col} from 'react-bootstrap'
const HelpLineSection = () => {
    return (
        <form id='helpLineSection' style={{height:'90px'}}>
            <Row id='rowInHLS'>
                <Col id='colInHLS'>
                  <div className='container' id="helpLine6"></div>
                     Support For Covid 19
                </Col>
                <Col id='spanInHLS'Col id='colInHLS'><div>Health Ministry</div> 
                <span id='spanInHLS'>+91-11-23978046 or 1075</span> 
                </Col>
                <Col id='colInHLS'><div>child</div> <span id='spanInHLS'>1098 </span> </Col>
                <Col id='colInHLS'><div>Mental Health</div> <span id='spanInHLS'>08046110007</span>  </Col>
                <Col id='colInHLS'><div>Senior Citizens</div><span id='spanInHLS'>14567</span> </Col>
                <Col id='colInHLS'><div>NCW</div><span id='spanInHLS'> 7827170170 </span> </Col>
            </Row>
        </form>
    )
}

export default HelpLineSection
