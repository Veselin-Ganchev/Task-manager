export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type ITaskArray = ITask[];
