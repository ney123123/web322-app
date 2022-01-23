

var posts = []
var categories = []
const { rejects } = require('assert');
const fs = require('fs/promises');
const { resolve } = require('path/posix');


function initialize(){
    fs.readFile('./data/posts.json', 'utf8', (err, data) => { if (err) throw err;
        console.log(data);
        });

    posts = require('./data/posts.json')
    categories = require('./data/categories.json')
    return new Promise(function(resolve, rejects){
            if(posts  && categories){
                resolve()
            }
            else{
                rejects()
            }
    })
}


initialize().then(
    console.log("successful loading"),
    console.log("not successful loading")
)






function getAllPosts(){
console.log(posts.length)
return new Promise(function(resolve, rejects){
    if (posts.length > 0){
        resolve();

    }
    else{
        rejects();
    }


})
}


getAllPosts().then(
    function(value){return posts},
    function(error){console.log("getAllPosts error")}
)


