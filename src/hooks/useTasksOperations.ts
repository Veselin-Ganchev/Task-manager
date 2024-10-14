import { useEffect, useState } from "react";
import { ITask, ITaskArray } from "@interfaces/tasks";
import { saveLocalTasks } from "@utils/localStorage";

export const useTasksOperations = (staticTasksArr: ITaskArray) => {
  const [tasksArr, setTasksArr] = useState<ITaskArray>([]);

  useEffect(() => {
    saveLocalTasks(tasksArr);
  }, [tasksArr]);

  useEffect(() => {
    setTasksArr(staticTasksArr);
  }, [staticTasksArr]);

  const addTask = (newTask: ITask) => {
    setTasksArr((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasksArr((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasksArr((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasksArr, addTask, deleteTask, toggleComplete };
};
