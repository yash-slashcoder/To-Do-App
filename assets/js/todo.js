window.onload = function () {
  var tasks = document.querySelectorAll('.details');
  for (let i = 0; i < tasks.length; i++) {
    let dueDate = tasks[i].children[1].innerText;
    dueDate = new Date(dueDate);
    var year = dueDate.getFullYear();
    var month = dueDate.toLocaleString('default', { month: 'short' });
    var day = dueDate.getDate();

    if (day < 10) {
      day = '0' + day;
    }

    var formattedDate = month + ' ' + day + ', ' + year;
    tasks[i].children[1].innerText = formattedDate;
  }
  console.log(tasks);
};

function DeleteTask() {
  var taskId = [];
  var tasks = document.getElementsByName('task');
  for (var task of tasks) {
    if (task.checked) {
      taskId.push(task.value.trim());
    }
  }
  if (taskId.length == 0) {
    alert('Please select any task!');
    return;
  }
  window.location.href = '/delete-task?taskId=' + JSON.stringify(taskId);
}
