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
        //let a = this.articleDetailService.getArticleById()

        this.article = new Article();
        this.article.name = "Artikel 1";
        //this.article.description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem";
        this.article.description = "Lorem ipsum dolor ";
        this.article.price = 3.333;
        this.article.image = "https://www.google.com/images/errors/logo_sm_2.png";

    }

    public getArticleDetails() {
        //TODO: request by real id
        this.articleDetailService.getArticleById('').subscribe((article) => {
            this.article = article;
        })
    }

}

