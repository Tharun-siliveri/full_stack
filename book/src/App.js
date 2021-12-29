import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from "./components/Header";
import AllPost from "./components/AllPost";
import AddPost from "./components/AddPost";


function App() {
  const LOCAL_STORAGE_KEY="posts";
  const [posts , setPosts] =useState([]);

  const addPostsHandler=(post) => {
    console.log(post);  
    setPosts([...posts,{auther:uuid(),...post }]);
  }; 
  const removePostHandler = (auther) => {
    const newPostList=posts.filter((post)=> {
      return post.auther !== auther;
    });
    setPosts(newPostList);
  };

  useEffect(() =>{
   const retrivePosts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrivePosts) setPosts(retrivePosts);
  }, [] ); 

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(posts));  
  }, [posts]);

  return (
    <div className='ui container'>
    <Header />
    <AddPost addPostsHandler={addPostsHandler}/>
    <AllPost posts={posts} getPostId={removePostHandler}/>

    </div>
    
  );
}

export default App;
