const { connection } = require('./connection');

const createTaskModel = async (name) => {
    const conn = await connection();
    conn.collection('tasks').insertOne({name});
    return name;
};

module.exports={createTaskModel}