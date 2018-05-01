import {Injectable} from '@angular/core';
import {BackendService} from "../shared/backend/backend.service";
import {Article} from "../shared/article/article.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NewArticleService {

    constructor(private backend: BackendService) {
    }

    public createNewArticle(name: string, desc: string, price: number, image: string): Observable<Article> {
        let article = new Article(name,desc,price,image);
        return this.backend.post('product', article);
    }
}