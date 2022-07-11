import { IBaseItem } from "../interface";

export interface IProduct extends IBaseItem {
  id: number;
  name: string;
  description: string;
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
  categoryType: any;
  categoryTypeId: number;
  categorySubject: any;
  categorySubjectId: number;
  basketItems: any[];
  brand: any;
  brandId: number;
  comments: any[];
  createdAt: Date;
}
