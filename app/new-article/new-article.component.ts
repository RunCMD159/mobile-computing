import { Component } from "@angular/core";
import { NewArticleService } from "./new-article.service";
import { Article } from "../shared/article/article.model";
import { RouterExtensions } from 'nativescript-angular';


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

    constructor(private newArticleService: NewArticleService,
                private routerExtensions: RouterExtensions) {

    }


    public createNewArticle(name, description, price, image) {
        let newArticle = new Article();
        newArticle.name = name;
        newArticle.description = description;
        newArticle.price = price;
        newArticle.image = image;
        this.newArticleService.createNewArticle(newArticle).subscribe((newArticle) => {
            this.createdArticle = newArticle;
            this.routerExtensions.navigate(["/overview"]);
        }, (error) => {
            console.error("ERROR")
        })
    }

}

