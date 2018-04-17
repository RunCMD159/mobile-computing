import {Injectable} from '@angular/core';
import {BackendService} from "../shared/backend/backend.service";

@Injectable()
export class ArticleDetailService {

    constructor(private backend: BackendService) {
    }

    getArticleById(articleId: string) {
        return this.backend.get('products/' + articleId);
    }
}