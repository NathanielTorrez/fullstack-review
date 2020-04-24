const db = require('../database/index.js');
const axios = require('axios')
const {getReposByUsername} = require('../helpers/github.js')

module.exports = {

  postToDatabase: (req, res) => {
    // get the data from github api
    const name = req.body.name

    var info = getReposByUsername(name)




   // send the data to the database
    //db.save()


  },

  getAllFromDatabase: (req , res) => {
    console.log('hello')
  }
};
