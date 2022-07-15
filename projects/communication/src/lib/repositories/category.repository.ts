import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpRepository } from "../http";
import { ICategory } from "../models";

@Injectable({
    providedIn: 'root'
})
export class CategoriesRepository extends HttpRepository<ICategory> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/categories`
    }
}