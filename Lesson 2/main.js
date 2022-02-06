// http://0.0.0.0:3000/

console.log('Running container...');

const express = require('express');
const app = express()

let port = process.env.PORT
const fs = require('fs')
const content = 'Some content_2!\n'
 
app.get("/", function(request, response){
  fs.appendFile('logs/file.log', content, err => {
      if (err) {
          console.log(err)
          return
      }
  });
  response.end("Success");
});
 
app.listen(port)