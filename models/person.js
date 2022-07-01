/*Travail a faire , il fat creer une personne avec ce prototype
name : string [required]
age : number
favoritesFoods : array of strings
*/

/*Phase de modelisation des données  */

const mongoose = require("mongoose");

let personSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: "number" },
  favoriteFoods: [String],
});

/* Creation et exportation du model */

exports.Person = mongoose.model("person", personSchema);

