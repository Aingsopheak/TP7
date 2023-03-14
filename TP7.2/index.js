const express = require('express')
const fs = require('fs');

const app = express()

app.get('/', (req, res) => {
  fs.readFile('./src/index.html', 'utf8', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return res.send("There is a server error");
    }
    res.send(data);
  });
})
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("The server is running on port 3000");
})