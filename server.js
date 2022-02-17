const express = require('express');
const { createTaskController, getAllTasksController } = require('./src/controller/taskContoller');
const errorMiddleware = require("./src/middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.post('/task', createTaskController);

app.get('/tasks', getAllTasksController);

app.use(errorMiddleware)

module.exports = app;