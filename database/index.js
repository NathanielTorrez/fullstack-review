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
  id: Number,
  full_name: String,
  url: String,
  description: String,
  forks: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (info, cb) => {

 Repo.create(info, cb);

  };

let getAll = (cb) => {


  Repo.find({}, function (err, repos) {
    if (err) {
      console.log('Unable to find repos');
      cb(err);
    } else {
      console.log('Found repos');
      cb(null, repos);
    }
  });
}

module.exports = {
  save: save,
  getAll: getAll
}