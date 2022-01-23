

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
    //console.log(posts)
    categories = require('./data/categories.json')
    return new Promise(function(resolve, rejects){
            if(posts.length >0  && categories.length >0){
                resolve()
            }
            else{
               
                rejects()
            }
    })
}




module.exports.initialize().then(
    function(value){console.log("successful loading")},
    function(error){console.log("not successful loading")}
)






module.exports.getAllPosts = function (){
//console.log(posts.length)
return new Promise(function(resolve, rejects){
    if (posts.length > 0){
        resolve();

    }
    else{
        rejects();
    }


})
}


module.exports.getAllPosts().then(
    function(value){console.log(posts.length); return posts},
    function(error){console.log("getAllPosts error")}
)

module.exports.getPublishedPosts = function (){
    console.log(posts[1].published);
    Ppsots = posts.reverse();
    console.log(this.Pposts)


    return new Promise(function(resolve, rejects){
        if (Pposts.length > 0){
            resolve();
    
        }
        else{
            rejects();
        }
    
    
    })
    }
    
    
    module.exports.getPublishedPosts().then(
        function(value){ return Pposts},
        function(error){console.log("getPPosts error")}
    )
    
