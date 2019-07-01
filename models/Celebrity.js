const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const celebrityOccupations = require("../enum/celebrity-occupations");

console.log("BEFORE map", celebrityOccupations);
console.log("AFTER map ", celebrityOccupations.map(x => x.value));

const celebritySchema = new Schema({
  name: { type: String, required: true, trim: true },
  occupation: {
    type: String,
    enum: celebrityOccupations.map(x => x.value)
  },
  birthYear: Number
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;

// => Define a "celebrities" collection

// DRY: don't repeat yourself
