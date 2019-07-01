// To execute this file, open the terminal and type:
// $ node bin/seeds.js 
// => It will create or recreate the collection "celebrities" with 3 documents

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose
  .connect("mongodb://localhost/express-enum-example", { useNewUrlParser: true })
  .then(x => { console.log("Connected to the database 'express-enum-example'"); })

let array = [
  { name: "Tom Hanks", occupation: "actor", birthYear: 1956 },
  { name: "Steven Spielberg", occupation: "director", birthYear: 1946 },
  { name: "Lady Gaga", occupation: "other", birthYear: 1986 },
];

Celebrity.deleteMany()
  .then(() => {
    return Celebrity.create(array)
  })
  .then(createdDocuments => {
    console.log(createdDocuments.length + " documents have been created in the collection 'celebrities'");
    mongoose.connection.close();
  })