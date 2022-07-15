import { IBaseItem } from "../interface";
import { IBasketItem } from "./basket-item";
import { IBrand } from './brand';
import { IFavorite } from "./favorite";

export interface IProduct extends IBaseItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  rates: number[];
  mainPhotoId: string;
  photoIds: string[];
  appointment: string;
  gender: any;
  skinType: any;
  useTime: any;
  classification: any;
  volume: number;
  country: string;
  agePlus: number;
  category: any;
  categoryId: number;
  categoryTypeId: number;
  categorySubjectId: number;
  brandId: number;
  createdAt: Date;

  // ! WHILE JOIN
  categoryType?: any;
  comments?: any[];
  categorySubject?: any;
  brand?: IBrand;
  favorites?: IFavorite[];
  basketItems?: IBasketItem[];
}
