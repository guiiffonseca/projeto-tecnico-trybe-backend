const sinon = require("sinon");
const { expect } = require("chai");
const mongoConnection = require("./model/connection");
const { createTaskModel } = require("./model/taskModel");
const { getConnection } = require("./mockConnection");
const { createTaskService } = require("./services/taskService")
const { createTaskController } = require("./controller/taskContoller");

describe("Testando a rota Adicionar nova tarefa", () => {
  let mockConnection;
  const emptyTask = {name: undefined};
  const newTask = {
    name: "Alimentar o cachorro",
  };
  

  before(async () => {
    mockConnection = await getConnection();
    sinon.stub(mongoConnection, "connection").resolves(mockConnection);
  });

  after(async () => {
    await mockConnection.db('model_exemple').collection('tasks').deleteMany();
     mongoConnection.connection.restore();
  });

  describe("Ao adicionar uma terfa com sucesso", () => {
    it("Deve haver uma tarefa cadastrada", async() => {
      await createTaskModel(newTask);
      const createdTask = mockConnection.db('model_exemple')
      .collection('tasks').findOne({name: newTask.name})
      
      expect(createdTask).to.be.not.null;
    })

    it("É retornado um objeto", async () => {
      const response = await createTaskModel(newTask);
      expect(response).to.be.a("object");
    });
    
    it("É retornado uma propridade name", async () => {
      const response = await createTaskService(newTask);
      expect(response).to.have.a.property("name");
    });

    it("Não é possível adicionar uma tarefa sem o nome", async () => {
       const response = await  createTaskService(emptyTask)
       expect(response).to.have.a.property("message");
    })

  });

});
