import { useState } from "react";
import { ITask } from "@interfaces/tasks";
import styles from "./TaskForm.module.css";

const TaskForm = ({
  taskHandler,
  staticTask,
}: {
  taskHandler: (task: ITask) => void;
  staticTask?: ITask | undefined;
}) => {
  const [title, setTitle] = useState(staticTask?.title || "");
  const [description, setDescription] = useState(staticTask?.description || "");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      setError("Both title and description are required.");
      return;
    }
    setError(null);

    taskHandler({
      id: staticTask?.id || Date.now(),
      title,
      description,
      completed: staticTask?.completed || false,
    });

    if (!staticTask) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <fieldset>
        <legend>{!staticTask ? "Add new task" : "Edit Task"}</legend>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
        {error && (
          <h3 style={{ color: "red" }} className={styles.errorMessage}>
            {error}
          </h3>
        )}
        <button type="submit" className={styles.button}>
          {staticTask ? "Update Task" : "Add Task"}
        </button>
      </fieldset>
    </form>
  );
};

export default TaskForm;
