import { Component } from "@angular/core";
import { ArticleDetailService } from "./article-detail.service";
import { Article } from "../shared/article/article.model";
import { PageRoute } from 'nativescript-angular';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: "ns-article-detail",
    templateUrl: "article-detail/article-detail.component.html",
    styleUrls: ["article-detail/article-detail.component.css"]

})
export class ArticleDetailComponent {

    article: Article;
    id: string;

    constructor(private articleDetailService: ArticleDetailService,
                private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => {
            this.id = params["id"];
            this.articleDetailService.getArticleById(this.id).subscribe((article) => {
                this.article = article;
            })
        });
    }


}

