// Existing tasks already on the board
const tasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
  {
    id: 4,
    title: "Correct JSL02",
    description: "Make corrections to JSL02 before attempting JSL03",
    status: "done"
  },
  {
    id: 5,
    title: "Work on JSL03",
    description:
      "Read the project brief and user stories to understand the requirements, implement a solution",
    status: "todo"
  },
  {
    id: 6,
    title: "Revise Javascript concepts",
    description:
      "Practice JS concepts to make sure I understand the fundamentals",
    status: "doing"
  }
];

// Function to validate task status input
function getValidStatus(taskNum) {
  let status = prompt(`Enter status for task ${taskNum} (todo, doing, done):`).toLowerCase();

  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Enter status for task ${taskNum} (todo, doing, done):`).toLowerCase();
  }

  return status;
}

// Let user add up to 3 new tasks
for (let i = 1; i <= 3; i++) {
  if (tasks.length >= 9) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }

  const title = prompt(`Enter title for task ${i}:`);
  const description = prompt(`Enter description for task ${i}:`);
  const status = getValidStatus(i);

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status
  };

  tasks.push(newTask);
}

// Display all tasks
console.log("All tasks:");
console.log(tasks);

// Filter and display only completed tasks
const completedTasks = tasks.filter(task => task.status === "done");
console.log("Completed tasks:");
console.log(completedTasks);
