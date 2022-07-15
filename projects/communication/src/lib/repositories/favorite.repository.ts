import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpRepository } from "../http";
import { IFavorite } from "../models";

@Injectable({
    providedIn: 'root'
})
export class FavoritesRepository extends HttpRepository<IFavorite> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/favorites`
    }
}