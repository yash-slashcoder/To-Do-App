const express = require('express');

// Create router
const router = express.Router();
const todoController = require('../controllers/todo_controller');

// use default route
router.get('/', todoController.todo);

// Create task
router.post('/create-todo', todoController.create_task);

// Delete task
router.get('/delete-task', todoController.delete_task);

//export router
module.exports = router;
