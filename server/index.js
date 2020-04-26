
const express = require('express');
const bodyParser = require('body-parser');
const {postToDatabase, getAllFromDatabase} = require('./controller.js');
let app = express();
let port = 1128;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', postToDatabase);

app.get('/repos', getAllFromDatabase);


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

