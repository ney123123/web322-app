

module.exports.posts = [];


module.exports.Pposts = [];


module.exports.categories = [];


const { rejects } = require('assert');
const fs = require('fs/promises');
const { resolve } = require('path/posix');


module.exports.initialize = function(){
    fs.readFile('./data/posts.json', 'utf8', (err, data) => { if (err) throw err;
        console.log(data);
        });

    posts = require('./data/posts.json')
    posts.forEach(x => {if(x.published ==true){
        this.Pposts.push(x)
    }});
    
    this.categories = require('./data/categories.json');
    var that = this


    return new Promise(function(resolve, rejects){
            if(posts.length >0  && that.categories.length >0){
                resolve()
            }
            else{
               
                rejects()
            }
    })
}











module.exports.getAllPosts = function (){
var that = this;
return new Promise(function(resolve, rejects){
    if (this.posts.length > 0){
        resolve();

    }
    else{
        rejects("getAllPosts error");
    }


})
}




module.exports.getCategories = function (){
    var that = this;
    return new Promise(function(resolve, rejects){
        if (that.categories.length > 0){
            resolve();
    
        }
        else{
            rejects();
        }
    
    
    })
    }
    
    
    
    

module.exports.getPublishedPosts = function (){
    var that = this;
    return new Promise(function(resolve, rejects){
        //console.log("Pposts.length=");
        if (that.Pposts.length > 0){
            resolve("Successfully loading published post");
    
        }
        else{
            rejects("no results returned");
        }
    
    
    })
    }
    
    
    //module.exports.getPublishedPosts().then(
    //    function(value){console.log(value);return this.Pposts},
    //    function(error){this.Pposts = "getPublishedPosts error" })
    
