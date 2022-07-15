import { IBaseItem } from "../interface";
import { IRole } from "./role";

export interface IUser extends IBaseItem {
    login: string;
    email: string;
    name: string;
    surname: string;
    phoneNumber: string;
    password: string;
    roleId: number;
    photoId?: string;
    birthDate: Date;

    // ! WHILE JOIN
    role?: IRole;
}