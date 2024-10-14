import { useMemo } from "react";
import { GetStaticProps } from "next";
import { fetchTasks } from "@utils/fetchTasks";
import TaskList from "@components/TaskList/TaskList";
import TaskForm from "@components/TaskForm/TaskForm";
import { useLocalStorageTasks } from "@hooks/useLocalStorageTasks";
import { useTasksOperations } from "@hooks/useTasksOperations";
import { ITaskArray } from "@interfaces/tasks";

export const getStaticProps: GetStaticProps<{
  staticLocalTasks: ITaskArray;
}> = async () => {
  const staticLocalTasks = await fetchTasks();
  return {
    props: {
      staticLocalTasks,
    },
  };
};

const Home = ({ staticLocalTasks }: { staticLocalTasks: ITaskArray }) => {
  const { staticTasksArr } = useLocalStorageTasks(
    useMemo(() => staticLocalTasks, [staticLocalTasks])
  );
  const { tasksArr, addTask, deleteTask, toggleComplete } =
    useTasksOperations(staticTasksArr);

  return (
    <div>
      <h1>Tasks</h1>
      {tasksArr.length > 0 ? (
        <TaskList
          tasks={tasksArr}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ) : (
        <h2>There is no tasks at this point. Please add task!</h2>
      )}
      <div>
        <TaskForm taskHandler={addTask} />
      </div>
    </div>
  );
};

export default Home;
