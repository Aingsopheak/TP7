const express = require('express')
const fs = require('fs');

const app = express()

app.get('/', function (req, res) {
  fs.readFile('./src/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send("There is a server error");
    }
  
    res.send(data);
  });
})

app.get('/detail', function (req, res) {

  res.send("Here is the detail page fasdfasdfsadfasdfads");
})

app.listen(3005, () => {
  console.log("The server is running on port 3005");
})