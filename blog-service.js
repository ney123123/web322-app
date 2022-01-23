var posts = []
var categories = []
const fs = require('fs/promises');
var initialize = function(){
    fs.readFile('/data/posts.json', 'utf8', (err, data) => { if (err) throw err;
        console.log(data);
        });
}

