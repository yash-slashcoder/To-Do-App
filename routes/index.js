const express = require('express');

// Create router
const router = express.Router();
const todoController = require('../controllers/todo_controller');

// use default route
router.get('/', todoController.todo);

//export router
module.exports = router;
