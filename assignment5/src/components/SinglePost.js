import React from "react";

const SinglePost = (props) =>{
    const { auther , title , description }=props.post;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{auther}</div>
            <div style={ {color:'green' } }>{title}</div>
            <div>{ description}</div>
        </div>
        <i className="trash alternate  outline icon" 
         onClick={() => props.clickHander(auther)}
        ></i> 
    </div> 
    )}
export default SinglePost;