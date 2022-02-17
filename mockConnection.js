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

// Função de mockar conexão retira do material da Trybe do dia 27.4 :
// https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-testando-as-camadas/33e05d58-0be4-48c0-adb9-f2f3d647c96e/o-que-vamos-aprender/4b3e602e-9941-49c6-b8d1-e9c83a8798ce?use_case=calendar
