import { IBaseItem } from "../interface";

export interface IBrand extends IBaseItem {
    name: string;
    photoId: string;
    description: string;
    photoUrl?: string;
    createdAt: string;
}