import { IBaseItem } from '../interface';
import { IProduct } from './product';

export interface IComment extends IBaseItem {
  userId: number;
  photoIds: string[];
  body: string;
  productId: number;
  createdAt?: Date;
  rating: number;

  // ! WHILE JOIN
  product?: IProduct;
}
