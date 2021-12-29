const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Import models
const Post = require('./src/models/post.js');

// Define application
 const app = express()

// Define DB Connection
 const db = mongoose.connect('mongodb://localhost:27017/NODE-API-CRUD')

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: false }))

 app.get('/', function (req, res) {
     // handle the request for root route
     res.send({ping: 'pong' })
 })
 // Operations: Create, Read, Update, Delete
 app.post('/posts', function(req, res) {
     // Get values from request payload
    const title = req.body.title
    const author = req.body.author
    const content = req.body.content

    // Assign values to post model
    var post = new Post();
    post.title = title
    post.author = author
    post.content = content

    // Save the post
    post.save(function(error, savedPost){
        if(error){
            // send error response
            res.status(500).send({ error : 'Unable to save Post' })
        } else {
            // send success response
            res.status(200).send(savedPost)
        }
    })
 });
//Get All Posts
 app.get('/posts', function(req, res){
    Post.find({}, function(error, posts){  
    if(error){
        //If Error
        res.status(422).send({ error : 'Unable to fetch Posts' })
    } else {
        //Send Success
        res.status(200).send(posts)
    }
})
})
//Get Post by ID
app.get('/posts/:id', (req, res)=>{
    const {id} = req.params;
    Post.findById(id, (error, Singlepost_deleted)=>{
      if(error) {
        //If Error
        res.status(422).send({ error: 'Unable to fetch post '})
      } else {
        //If Success
        res.status(200).send(Singlepost_deleted)
      }
    });
});
//Update a Post by ID

app.patch('/posts/:id', (req, res)=>{
    const {id} = req.params;
   Post.findByIdAndUpdate(id, req.body, {new:true}, (error, updated_post)=>{
      if(error) {
        //If Error
        res.status(422).send({ error: 'Error in updating post '})
      } else {
        //If Success
        res.status(200).send(updated_post)
      }
    });
});
//Delete a post by ID

app.delete('/posts/:id', (req, res)=>{
    const {id} = req.params;
    Post.findByIdAndDelete(id, (error,post_deleted )=>{
      if(error) {
        //If Error
        res.status(422).send({ error: 'Unable to delete post '})
      } else {
        //If Success
        res.status(200).send(post_deleted)
      }
    });
});
//Running Port
 app.listen(27017, function(){
     console.log('Server is running at port 27017...')
 })

