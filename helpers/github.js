const request = require('request');
const config = require('../config.js');

let getReposByUsername = (name) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  // we need to make a request to githubs api for a username search with name
  // we will need full_name, owners.repos_url, forks


  let options = {
    url: `https://api.github.com/search/repositories?q=${name}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // call back will call the save method, this will save it to the database

  let callback = (error,response, body) => {
     if (error) {
       console.error(error)
     } else {

         var newBody = JSON.parse(body);
       console.log(newBody.items[0])
     }
  };

  var info = request(options, callback)
  //console.log(info)
}

module.exports.getReposByUsername = getReposByUsername;