import { IBaseItem } from "../interface";
import { IUser } from "./user";

export interface IRole extends IBaseItem {
    name: RolesEnum;

    // ! WHILE JOIN
    users: IUser[];
}

export enum RolesEnum {
    ADMIN = "admin",
    USER = "user",
}
