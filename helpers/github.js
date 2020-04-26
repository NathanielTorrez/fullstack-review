const request = require('request');
const config = require('../config.js');
const database = require('../database/index.js')

let getReposByUsername = (name, callback) => {

//DEFINES THE OPTIONS FOR REQUEST
  let options = {
    url: `https://api.github.com/users/${name}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };


  request(options, callback)
}

let filterData = (data) => {
  var result = [];

  for ( var i = 0; i < data.length; i++) {

    let conformedObj = {
      id: data[i].id,
      name: data[i].full_name,
      url: data[i].owner.repos_url,
      description: data[i].description,
      forks: data[i].forks
    }
     result.push(conformedObj)
  }
  return result
}

module.exports.getReposByUsername = getReposByUsername;
module.exports.filterData         = filterData;