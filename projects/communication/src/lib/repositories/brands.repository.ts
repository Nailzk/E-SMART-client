import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpRepository } from "../http";
import { IBrand } from "../models";

@Injectable({
    providedIn: 'root'
})
export class BrandsRepository extends HttpRepository<IBrand> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/brands`
    }
}