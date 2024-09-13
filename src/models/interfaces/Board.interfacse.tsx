import { ColumnInterface } from "./Column.interface";
import { UserInterface } from "./User.interface";

export interface BoardInterface {
    id: string;
    title: string;
    columns: ColumnInterface[];
    members: UserInterface[];
}