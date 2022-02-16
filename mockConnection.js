const { MongoClient } = require("mongodb");
const { MongoMemoryServer } = require("mongodb-memory-server");

const DB_SERVER = new MongoMemoryServer();
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getConnection = async () => {
  const URLMock = await DB_SERVER.getUri();
  return MongoClient.connect(URLMock, OPTIONS);
};

module.exports = { getConnection };
