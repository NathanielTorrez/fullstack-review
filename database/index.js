const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// making sure database is runnning
const db = mongoose.connection;

db.once('open', () => {
  console.log('database is open')
});

db.on('error', console.error.bind(console, 'connection error'));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  full_name: String,
  url: String,
  description: String,
  forks: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (info) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // create the new instance to save

  let newRepo = new Repo({
    full_name: info.full_name,
    url: info.url ,
    description: info.description,
    forks: info.forks
  })

  // save the new instance to the database

  newRepo.save( (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })

}

module.exports.save = save;