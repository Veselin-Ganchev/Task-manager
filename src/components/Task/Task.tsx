import { ITask } from "@interfaces/tasks";
import Link from "next/link";
import styles from "./Task.module.css";

const Task = ({
  task,
  deleteTask,
  toggleComplete,
}: {
  task: ITask;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}) => {
  return (
    <li className={styles.taskItem}>
      <div className={styles.taskInfo}>
        <h3
          className={`${styles.taskTitle} ${
            task.completed ? styles.completed : ""
          }`}
        >
          {task.title}
        </h3>
        <p className={styles.taskDescription}>{task.description}</p>
      </div>
      <div className={styles.taskActions}>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Mark as Pending" : "Mark as Completed"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <Link href={`/task/${task.id}`} className={styles.editLink}>
          Edit Task
        </Link>
      </div>
    </li>
  );
};

export default Task;
