# Task Manager Aplication

## Used technologies

- ReactJS v18
- NextJS v14
- Typescript v4
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

## How to Build and Start the Project

1. Clone Github repository:
   git clone https://github.com/Veselin-Ganchev/Task-manager.git

2. Navigate to the project root folder
   cd task-app

3. Install all necessary packages:
   npm install
   or
   yarn install

4. Run json-server to access the local API:
   npm run server
   or
   yarn server

5. Run the project:
   npm start
   or
   yarn start
