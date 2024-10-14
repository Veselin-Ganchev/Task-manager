import { useState } from "react";
import { ITask, ITaskArray } from "@interfaces/tasks";
import Task from "@components/Task/Task";
import styles from "./TaskList.module.css";

const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete,
}: {
  tasks: ITaskArray;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}) => {
  const [filterState, setFilterState] = useState<
    "all" | "completed" | "pending"
  >("all");

  const filteredTasks = tasks.filter((task: ITask) => {
    if (filterState === "all") return true;
    if (filterState === "completed") return task.completed;
    return !task.completed;
  });

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskFilter}>
        <button onClick={() => setFilterState("all")}>All</button>
        <button onClick={() => setFilterState("completed")}>Completed</button>
        <button onClick={() => setFilterState("pending")}>Pending</button>
      </div>

      <ul className={styles.taskList}>
        {filteredTasks.map((task: ITask) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
