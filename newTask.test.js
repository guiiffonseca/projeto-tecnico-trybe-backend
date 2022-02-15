const { expect } = require('chai');
const sinon = require('sinon')
const { createTaskModel } = require('./model/newTaskModel')
const { connection } = require('./model/connection');


describe('Testando a rota Adicionar nova tarefa', () => {
    const newTask = {
        name: 'Alimentar o cachorro',
    }

    let mockConnection;
    
    before(() => {
        const ID_EXAMPLE = '604cb554311d68f491ba5151';
        const insertOne = async () => ({ insertedId: ID_EXAMPLE });
        const collection = async () => ({ insertOne });
        const db = async (databaseName) => ({ collection });
        const getConnectionMock = async () => ({ db });

        mockConnection = getConnectionMock()
            .then((conn) => conn.db('model_example'));

        sinon.stub(connection, 'getConnection').resolves(mockConnection)
    });

    after(() => {
        connection.getConnection.restore();
    })

    it('É retornado um objeto adicionar uma nova tarefa com sucesso', async () => {
        const response = await createTaskModel.create(newTask);
        expect(response).to.be.a('object')
    })

    it('É retornado um id ao adicionar uma nova tarefa ', async () => {
        const response = await createTaskModel.create(newTask);
        expect(response).to.have.a.property('id')
    })
})