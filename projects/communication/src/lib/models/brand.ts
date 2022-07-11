import { IBaseItem } from "../interface";

export interface IBrand extends IBaseItem {
    name: string;
    photoId: string;
    photoUrl?: string;
    createdAt: string;
}