import React from 'react'
import digilockerIcon from './../assets/images/digilockerIcon.jpeg'
import umangIcon from './../assets/images/umangIcon.jpeg'
import AarogyaSetuIcon from './../assets/images/AarogyaSetuIcon.jpeg'
import  myGovIcon from './../assets/images/mygovIcon.png'
const styleForIcons={
    height:'100px',
    width:'150px',
    padding: '10px',
    marginLeft:'50px',
    marginBottom:'50px'
}
const styleForH1={
        fontWeight:'bold',
        marginBottom:'50px'
}
const styleFora={
    textDecoration:'none',
    padding:'50px',
    fontSize:'22px'

}
const OurPartners = () => {
    return (
        <div className='ourPartners'>
            <h1 style={styleForH1}> Our Partners</h1>
            <img src={digilockerIcon} style={styleForIcons} alt="" />
            <img src={umangIcon} style={styleForIcons} alt="" />
            <img src={AarogyaSetuIcon} style={styleForIcons} alt="" />
            <img src={myGovIcon} style={styleForIcons} alt="" />
            <br />
            <a href="" style={styleFora}>View More</a>
            <a href="" style={styleFora}> Register As partner</a>
        </div>
    )
}

export default OurPartners
