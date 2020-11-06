const celebrities = [
    {
        name : "Leonardo Di Caprio",
        occupation: "Actor",
        catchPhrase: "Save the world"
    },
    {
        name : "Michael Phelps",
        occupation: "Swimmer",
        catchPhrase: "No pain no gain"
    },
    {
        name : "John Cena",
        occupation: "Wrestler",
        catchPhrase: "U cant see me"
    }
]

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
//const Celebrity = require('../models/celebrity.model');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


//  Celebrity
//  .insertMany(celebrities)
//  .then(r=>{console.log("Celebrities have been added")})
//  .catch(error=>console.log("An error has occurred"))