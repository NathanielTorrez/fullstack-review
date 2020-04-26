const db = require('../database/index.js');
const axios = require('axios')
const {getReposByUsername, filterData} = require('../helpers/github.js')

module.exports = {

  postToDatabase: (req, res) => {
    // get the data from github api
    const name = req.body.name

    let callback = (error, repos) => {

      if (error) {
        console.log(error)
        res.status(404);
        res.end();

      } else {

        var data = JSON.parse(repos.body);
        var conformedData = filterData(data);
        db.save(conformedData,(err, success) => {
          if (err) {
            console.log(error)
            res.status(404);
            res.send(error);
          } else {
            res.status(201);
            res.end()
          }
        });
      }
    };

    getReposByUsername(name, callback);
  },

  getAllFromDatabase: (req , res) => {

    db.getAll((err, data) => {
      if (err) {
        res.status(404)
        res.end()
      } else {
        //console.log(data, 'this is the data')
        res.status(200)
        res.send(data)
      }
    })
  }
}