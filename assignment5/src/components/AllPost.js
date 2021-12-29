import React ,{useState} from "react";
import SinglePost from "./SinglePost";
const AllPost = (props) => {
    console.log(props); 

    const deletePostHandler =(auther) => {
        props.getPostId(auther);
    }
    const renderAllPosts = props.posts.map((post) =>{
        return(
           <SinglePost post={post} clickHandler = {deletePostHandler} key={post.auther} ></SinglePost>
        ); 
    }
    ); 
    return(
            <div className="ui celled list">
                All Posts
                {renderAllPosts}
            </div>
    ); 
}; 
export default AllPost;  