# JSL02 Challenge – Solution Code

## Overview

This repository provides the **official solution code for the JSL02 challenge**. It is meant to help students verify their understanding of JavaScript fundamentals, particularly **user input validation**, **conditional logic**, and **basic output to the console**.

Students should use this solution to:

- Review their approach to handling user input via `prompt()`
- Compare logic used for validating task statuses (`todo`, `doing`, `done`)
- Understand how to handle multiple conditional outputs
- Improve their code readability and structure before continuing to **JSL03**

## Features Covered

The solution demonstrates how to:

- Prompt the user for **titles**, **descriptions**, and **status** of two tasks
- Validate the entered status to ensure it's one of the allowed options
- Display a **summary in the console** if a task is marked `"done"`
- Log a motivational message if **neither** task is completed

## Structure

The project includes:

- ✅ Interactive JavaScript to collect and validate user input
- 🧠 Clear loops for input validation
- 🔍 Simple logic that checks and logs completion status
- 💬 Console messages to give meaningful feedback to the user

## How to Use This Solution

1. Open the project folder with **Live Server** in VS Code, then open your browser's **developer console** to view the outputs.
2. Compare the input handling, validation, and logging logic to your own implementation.
3. Reflect on any areas where your code could be **cleaner**, **more robust**, or **easier to read**.
4. Make necessary improvements before continuing to JSL03.

---

## License

This solution code is provided for **educational use only**.





# JSL03: Console-Based Task Manager

This project is a JavaScript-based task manager that runs entirely in the browser console. It allows users to add up to three new tasks to an existing list of tasks and view only completed tasks using prompts and console output.

---

## 📋 Project Overview

- Users can add up to **3 new tasks** through browser prompts.
- Each task is stored as an **object inside an array**.
- Each task is assigned a **unique incremental ID**.
- The program filters and logs only tasks marked as **"done"**.
- Users are alerted when the task limit (9 total) is reached.

---

## 🔧 Technologies Used

- JavaScript (ES6+)
- HTML (used only to run the script)
- Browser Console (Chrome, Firefox, etc.)

---

## 🚀 How to Run the Project

1. Clone or download the project folder.
2. Open `index.html` in your browser (recommended: use **Live Server** in VS Code).
3. Follow the prompt windows to enter task details (title, description, and status).
4. Open the browser **Console (F12)** to view:
   - All tasks
   - Completed tasks only

---

## 🧠 Features

- ✅ Status validation (`todo`, `doing`, `done`)
- ✅ Auto-incrementing task IDs
- ✅ Task limit enforcement (max 9 tasks total)
- ✅ Clear separation of all tasks and completed tasks
- ✅ Console logging for easy review

---

## 📂 File Structure

