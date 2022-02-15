const { createTaskService } = require("../services/taskService");

const createTaskController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newTask = await createTaskService(name);
        return res.status(200).json(newTask);
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = { createTaskController}