import {Component} from "@angular/core";
import {ArticleDetailService} from "./article-detail.service";
import {Article} from "../shared/article/article.model";


@Component({
    selector: "ns-article-detail",
    templateUrl: "article-detail/article-detail.component.html",
    styleUrls: ["article-detail/article-detail.component.css"]

})
export class ArticleDetailComponent {

    article: Article;

    constructor(private articleDetailService: ArticleDetailService) {

    }

    public getArticleDetails() {
        //TODO: request by real id
        this.articleDetailService.getArticleById('').subscribe((article) => {
            this.article = article;
        })
    }

}

