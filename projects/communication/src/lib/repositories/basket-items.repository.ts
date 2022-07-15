import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpRepository } from "../http";
import { IBasketItem } from "../models";

@Injectable({
    providedIn: 'root'
})
export class BasketItemsRepository extends HttpRepository<IBasketItem> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/basket-items`
    }
}