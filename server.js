var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.use(express.static('public'));
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Express http server listening on "+ HTTP_PORT);
    res.redirect("/about/about.html")
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