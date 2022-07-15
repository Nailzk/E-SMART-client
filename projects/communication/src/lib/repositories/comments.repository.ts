import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpRepository } from "../http";
import { IComment } from "../models";

@Injectable({
    providedIn: 'root'
})
export class CommentsRepository extends HttpRepository<IComment> {
    get _baseUrl(): string {
        return `${environment.productsApiUrl}/comments`
    }
}