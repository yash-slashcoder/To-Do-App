const Task = require('../models/todo');

// Category list
const category = [
  'Personal',
  'Work',
  'Workout',
  'Sports',
  'Entertainment',
  'Goals',
];

module.exports.todo = function (req, res) {
  // Get Task List
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log('Error in fetching tasks from db');
      return;
    }

    return res.render('todo', { categories: category, task_list: tasks });
  });
};

module.exports.create_task = function (req, res) {
  // create new task
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      duedate: req.body.duedate,
    },
    function (err, newTask) {
      if (err) {
        console.log('error in creating a task');
        return;
      }

      console.log('*******', newTask);
      return res.redirect('back');
    }
  );
};

module.exports.delete_task = function (req, res) {
  let taskId = JSON.parse(req.query.taskId);

  // delete multiple tasks
  Task.deleteMany({ _id: { $in: taskId } }, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    return res.redirect('back');
  });
};
