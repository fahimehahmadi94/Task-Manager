import { TaskInterface } from "./Task.interface";

export interface ColumnInterface {
    id: string;
    title: string;
    tasks: TaskInterface[];
}