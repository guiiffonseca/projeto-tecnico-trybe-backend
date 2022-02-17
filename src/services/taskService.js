const { createTaskModel, getAllTasksModel } = require("../model/taskModel");
const { throwErr } = require("../utils/err")

const BAD_REQUEST = 400;
const NAME_REQUIRED = "name is required";

const validateName = (name) => {
    if (!name) throw throwErr(BAD_REQUEST, NAME_REQUIRED);
};


const createTaskService = async (name) => {
    validateName(name)

    const {insertedId: id}= await createTaskModel(name);
    
    return {
        id,
        name,
    }
};

const getAllTasksService = async () => {
    const allTasks = await getAllTasksModel();
    return allTasks;
}


module.exports = { createTaskService, getAllTasksService };