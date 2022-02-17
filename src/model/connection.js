const { MongoClient } = require("mongodb");
require("dotenv").config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || "mongodb"}:27017/TasksDb`;
const DB_NAME = "TasksDb";

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

async function connection() {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
        .then((conn) => {
          db = conn.db(DB_NAME);
          return db;
        })
        .catch((err) => {
          console.log(err);
          process.exit();
        });
}

module.exports = {
  connection,
};
