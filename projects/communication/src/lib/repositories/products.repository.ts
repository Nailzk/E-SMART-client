import { Injectable } from "@angular/core";
import { ImageService } from "@app/service";
import { environment } from "@env/environment";
import { map, Observable } from "rxjs";
import { HttpRepository } from "../http";
import { IPaginationResponse } from "../interface";
import { IProduct } from "../models";

@Injectable({
    providedIn: 'root'
})
export class ProductsRepository extends HttpRepository<IProduct> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/products`
    }
}