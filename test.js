const sinon = require("sinon");
const { expect } = require("chai");
const { MongoClient } = require("mongodb");
const { createTaskModel } = require("./model/taskModel");
const { getConnection } = require("./mockConnection");
const mongoConnection = require("./model/connection");

describe("Testando a rota Adicionar nova tarefa", () => {
  let mockConnection;
  const newTask = {
    name: "Alimentar o cachorro",
  };

  before(async () => {
    mockConnection = await getConnection();
    sinon.stub(mongoConnection, "connection").resolves(mockConnection);
  });

  after(async () => {
    await mongoConnection.connection.restore();
  });

  describe("Ao adicionar uma terfa com sucesso", () => {
    it("É retornado um objeto", async () => {
      const response = await createTaskModel(newTask);
      expect(response).to.be.a("object");
    });

    it("É retornado uma propridade nome", async () => {
      const response = await createTaskModel(newTask);
      expect(response).to.have.a.property("name");
    });
  });
});
