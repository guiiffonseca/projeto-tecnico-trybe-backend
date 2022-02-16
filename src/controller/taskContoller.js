const { createTaskService, getAllTasksService } = require("../services/taskService");

const createTaskController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const newTask = await createTaskService(name);
        return res.status(200).json(newTask);
    } catch (error) {
        next(error)
    };
};

const getAllTasksController = async ( req, res, next) => {
    try {
        const allTasks = await getAllTasksService();
        return res.status(200).json(allTasks)
    } catch (error) {
        next(error);
    }
};

module.exports = { createTaskController, getAllTasksController }