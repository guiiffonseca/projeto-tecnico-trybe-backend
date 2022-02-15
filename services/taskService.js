const { createTaskModel } = require("../model/taskModel");

const createTaskService = async (name) => {
    const { insertedId: id} = await createTaskModel(name);
    return id;

};

module.exports = { createTaskService };