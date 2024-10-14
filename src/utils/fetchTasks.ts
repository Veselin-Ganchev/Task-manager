import axios from "axios";
import { ITaskArray } from "@interfaces/tasks";

export const fetchTasks = async (): Promise<ITaskArray> => {
  try {
    const response = await axios(
      `${process.env.NEXT_PUBLIC_URL}/task-data.json`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
