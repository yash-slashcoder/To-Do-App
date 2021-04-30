const mongoose = require('mongoose');

// Create schema mdoel for todo
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  duedate: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model('Task', todoSchema);

// exports task model
module.exports = Task;
