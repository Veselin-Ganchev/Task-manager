# Task Manager Aplication

## Used technologies

- ReactJS v18
- NextJS v14
- Typescript v5
- CSS modules
- Axios

## Description

Simple Task Manager web application made with NextJS/ReactJS, TypeScript, Local and LocalStorage Data.

## Functionality:

- Read all initial taks
- Add new Task (title and description)
- Edit Task on dedicated edit page that allows users to modify task details
- Filter Tasks by All/Completed/Pending
- Delete Task from the task list.
- Task Completion, Users can mark tasks as completed

## Features

- The application is fully responsive and works on various screen sizes, including mobile devices and tablets.
- Tasks are stored in the browser's local storage to persist data between sessions.
- Users can refresh the page without losing their task data.
- Each task has a unique URL that can be accessed directly using its ID.
- Users can easily share task URLs with others.
- User-friendly error messages are displayed for common issues, such as:
  - Invalid task ID when trying to edit a task with provided link "Back to homepage"
  - Attempting to access a task that does not exist.
- Dark and Light theme

## Initial data

- The initial task data is provided by local JSON file in the public folder
- The JSON is initialy loaded by static generation
- The initial data is persisted in the browser local storage by function where it can be modified on client side

## How to Build and Start the Project

1. Clone Github repository:
   git clone https://github.com/Veselin-Ganchev/Task-manager.git

2. Navigate to the project root folder
   cd task-app

3. Install all necessary packages:
   npm install
   or
   yarn install

4. Run the project:
   npm run dev
   or
   yarn run dev

5. Open your web browser and navigate to the port that application is provided(example: http://localhost:3000) to view and interact with the application.
