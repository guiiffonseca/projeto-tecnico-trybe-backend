const { connection } = require('./connection');

const createTaskModel = async (name) => {
    const conn = await connection();
    const query = conn.collection('tasks').insertOne({name})
    return query;
};

const getAllTasksModel = async () => {
    const conn = await connection();
    const query = conn.collection('tasks').find({}).toArray();
    return query;
}

module.exports={ createTaskModel, getAllTasksModel }