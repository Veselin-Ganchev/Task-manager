import { useEffect, useRef, useState } from "react";
import { ITaskArray } from "@interfaces/tasks";
import { readLocalTasks, saveLocalTasks } from "@utils/localStorage";

export const useLocalStorageTasks = (staticLocalTasks: ITaskArray) => {
  const [staticTasksArr, setStaticTasksArr] = useState<ITaskArray>([]);
  const isInitialized = useRef<boolean>(false);

  useEffect(() => {
    if (!isInitialized.current) {
      const localStorageTasks = readLocalTasks();
      if (localStorageTasks) {
        setStaticTasksArr(localStorageTasks);
      } else {
        setStaticTasksArr(staticLocalTasks);
      }
      isInitialized.current = true;
    }
  }, [staticLocalTasks]);

  useEffect(() => {
    saveLocalTasks(staticTasksArr);
  }, [staticTasksArr]);

  return { staticTasksArr };
};
