/*Avant de commencer je tiens a preciser que j'ai mis la connection a la Database 
avec la methode static donc je n'aurais pas instancier avec new () */

const { Person } = require("./models/person");
const express = require("express");
const app = express();
const port = 4000;
const Database = require("./database/db");

/*connection a la base de donnée */
Database.connect();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(` app listening on port ${port}!`));

/*creation et enregistremnt d'un document person */

let person = Person({
  name: "Naruto Uzumaki",
  age: 32,
  favoriteFoods: ["ramen", "sushi"],
});

/*enregistremnt du doment avec la methode doc.save() */

person.save().then((person) => {
  console.log(person);
});

/*Creation de plusieurs documents */

let manyPersons = Person.create([
  {
    name: "Sasuke uchiwa",
    age: 33,
    favoriteFoods: ["sushi", "boullettes de riz"],
  },
  {
    name: "Kakashi Hatake",
    age: 46,
    favoriteFoods: ["poisson", "saumon fummé"],
  },
  {
    name: "Sakura haruno",
    age: 34,
    favoriteFoods: ["bonbon", "bouillon de boeuf"],
  },
]).then((many) => {
  console.log(many);
});

/* Trouver tous les documents de la collection Person */

Person.find().then((search) => {
  console.log(search);
});

/*Trouver un document selon son id  */

let id = "62bf137f994160dc92c3c0f1";
Person.findById(id).then((personId) => {
  personId;
});

/*Trouver un document selon id et Ajouter Hamburger selon a sa liste de favoriteFoods */

Person.findById(id)
  .update({ favoriteFoods: "porc" })
  .then((person) => {
    console.log(person);
  });

/*Modifier l'age d'une personne apres l'avoir trouver grace a son nom */

Person.findOneAndUpdate(
  { name: "Kakashi Hatake" }, //valeur qui permettra de retrouver l'element a update
  { age: 47 } //valeur a modifier
).then((person) => {
  console.log(person);
});

/*supprimer une personne par son  */

Person.findByIdAndRemove({ _id: "62bf137f994160dc92c3c0f1" }).then((person) => {
  console.log(person);
});

/*supprimer toutes les personnes portant u nom donner */

Person.remove({ name: "name" }).then((person) => {
  console.log(person);
});

/*Trouver les gens qui aime une food definie 
trier leur noms , limiter les resultats a 2 documents et masquer l'age */

Person.find({ favoriteFoods: "alloco" })
  .limit(2)
  .sort({ name: 1 })
  .select({ age: true })
  .then((person) => {
    console.log(person);
  });
