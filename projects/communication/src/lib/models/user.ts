import { IBaseItem } from "../interface";
import { IRole } from "./role";

export interface IUser extends IBaseItem {
    userName: string;
    email: string;
    name: string;
    surName: string;
    phone: string;
    password: string;
    roleId: number;

    // ! WHILE JOIN
    role?: IRole;
}