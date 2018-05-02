import { Injectable } from '@angular/core';
import { BackendService } from "../shared/backend/backend.service";
import { Article } from "../shared/article/article.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NewArticleService {

    constructor(private backend: BackendService) {
    }

    public createNewArticle(newArticle: Article): Observable<Article> {
        return this.backend.post('products', newArticle);
    }
}