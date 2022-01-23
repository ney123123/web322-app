var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var blogService = require("./blog-service.js");
var app = express();
console.log("Express http server listening on "+ HTTP_PORT)
app.use(express.static('public'));
/*var posts = require('./data/posts.json');
var PPosts = posts.map(function(post){
    if (post.published == 'true'){
    return post
    }
})*/
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    
    //res.send("hello!");
    res.redirect("/about")
});

app.get("/blog", (req, res) => {
    
    
    
});
app.get("/categories", (req, res) => {
    
    
    
});

app.get("/posts", (req, res) => {
    
    
    //res.send(PPosts);
    //res.sendFile(__dirname + "/data/posts.json");
});
app.get('/about', function(req, res){ 
    res.sendFile(__dirname + "/view/about.html");
    
}); 
app.use((req, res) => {
    res.status(404).sendFile(__dirname+"./view/404.html");
  });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);


/********************************************************************** * WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Pun Kam Keung Student ID: 139286207 Date: 18/01/22 *
* Online (Heroku) URL: https://guarded-atoll-02729.herokuapp.com
************************************************************************ ********/