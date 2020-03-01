const mongoose = require("mongoose");
const config = require("../config");

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

async function connect() {
  const {user, password, databasePath} = config;
  if (!user || !password || !databasePath) {
console.log("Please specify environment variables...")
return
  }
  const db = `mongodb+srv://${user}:${password}@${databasePath}`;
  return mongoose
  .connect(db, mongooseOptions)
  .catch(error => console.error("Initial DB connection failed!", error));
}

module.exports = {
  connect
};
