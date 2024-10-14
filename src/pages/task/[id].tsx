import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ITask, ITaskArray } from "@interfaces/tasks";
import TaskForm from "@components/TaskForm/TaskForm";
import { readLocalTasks, saveLocalTasks } from "@utils/localStorage";
import styles from "./[id].module.css";

const EditTask = () => {
  const { query, push } = useRouter();
  const { id } = query;
  const [task, setTask] = useState<ITask | undefined>(undefined);
  const [tasks, setTasks] = useState<ITaskArray>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let currentTask: ITask | undefined = undefined;
    const storedTasks: ITaskArray | null = readLocalTasks();

    if (storedTasks) {
      currentTask = storedTasks.find((task) => task.id === Number(id));
      if (!currentTask)
        return setError("Task not found. Please check the ID and try again.");

      setTasks(storedTasks);
      setTask(currentTask);
    }
  }, [id]);

  const handleUpdate = (updatedTask: ITask) => {
    try {
      const updatedTasks = tasks.map((task: ITask) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      setTasks(updatedTasks);
      saveLocalTasks(updatedTasks);
      push("/");
    } catch (err) {
      setError("Failed to update the task.");
      console.error("Error updating the task:", err);
    }
  };

  if (!id) return <div className={styles.tskIdContainer}>Loading...</div>;

  if (error) {
    return (
      <div className={styles.tskIdContainer}>
        <h2>
          {error ? error : "Task not found. Please check the ID and try again."}
        </h2>
        <Link rel="stylesheet" href="/">
          Back to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.tskIdContainer}>
      <h2>Edit Task</h2>
      {task && <TaskForm taskHandler={handleUpdate} staticTask={task} />}
    </div>
  );
};

export default EditTask;
