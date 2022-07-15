import { IBaseItem } from "../interface";
import { IProduct } from "./product";

export interface IBasketItem extends IBaseItem {
    userId: number;
    productId: number;
    createdAt?: Date;

    // ! WHILE JOIN
    product?: IProduct;
}