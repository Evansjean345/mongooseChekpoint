const mongoose = require("mongoose");
const mongoServer =
  "mongodb+srv://Evans345:Azerty0987@cluster0.uvefquj.mongodb.net/mongoexo?retryWrites=true&w=majority";

class Database {
  static connect() {
    mongoose
      .connect(mongoServer)
      .then(() => {
        console.log("database connecting");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}

module.exports = Database;
