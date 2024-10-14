import { ITaskArray } from "@interfaces/tasks";

export const readLocalTasks = (): ITaskArray | null => {
  if (typeof window !== "undefined") {
    const tasks = localStorage.getItem("tasks");
    const tasksArr: ITaskArray = tasks ? JSON.parse(tasks) : null;
    return tasksArr;
  }
  return null;
};

export const saveLocalTasks = (tasks: ITaskArray): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};
