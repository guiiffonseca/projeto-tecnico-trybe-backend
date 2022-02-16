const express = require('express');
const { createTaskController } = require('./controller/taskContoller');
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express();

app.use(express.json());

app.post('/task', createTaskController );

app.use(errorMiddleware)

module.exports = app;