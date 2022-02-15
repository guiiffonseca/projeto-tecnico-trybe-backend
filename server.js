const express = require('express');
const { createTaskController } = require('./controller/taskContoller');

const app = express();

app.use(express.json());

app.post('/task', createTaskController );

module.exports = app;