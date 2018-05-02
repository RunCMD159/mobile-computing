import { Component } from "@angular/core";
import { NewArticleService } from "./new-article.service";
import { Article } from "../shared/article/article.model";


@Component({
    selector: "ns-new-article",
    templateUrl: "new-article/new-article.component.html",
    styleUrls: ["new-article/new-article.component.css"]

})
export class NewArticleComponent {
    name: string;
    description: string;
    price: number;
    image: string;

    createdArticle: Article;

    constructor(private newArticleService: NewArticleService) {

    }


    public createNewArticle(name, description, price, image) {
        let newArticle = new Article(name, description, price, image);
        console.log(newArticle);
        this.newArticleService.createNewArticle(newArticle).subscribe((newArticle) => {
            this.createdArticle = newArticle;
            console.log(newArticle.name)
        }, (error) => {
            console.error("ERROR")
        })
    }

}

