
const express = require('express');
const bodyParser = require('body-parser');
const {postToDatabase, getAllFromDatabase} = require('./controller.js');
let app = express();
let port = 1128;



app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));



// TODO - your code here!
// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database


app.post('/repos', postToDatabase)

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

