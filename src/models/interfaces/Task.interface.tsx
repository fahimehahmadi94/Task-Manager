import { UserInterface } from "./User.interface";

export interface TaskInterface {
    id: string;
    title: string;
    description: string;
    assignedTo: UserInterface[];
    columnId: string;
    status: 'todo' | 'in-progress' | 'done';
    dueDate: string;
}