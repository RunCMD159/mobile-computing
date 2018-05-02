import { Article } from "../shared/article/article.model";
import { OverviewService } from "./overview.service";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';


@Component({
    selector: "ns-overview",
    templateUrl: "overview/overview.component.html",
    styleUrls: ["overview/overview.component.css"],
    changeDetection: ChangeDetectionStrategy.Default
})
export class OverviewComponent {

    products: Article[] = [];

    constructor(private overviewService: OverviewService,
                private routerExtensions: RouterExtensions) {

    }

    ngOnInit() {
        console.log("Constructor OverviewComponent ");
        this.getAllProducts();

    }

    public getAllProducts() {
        console.log("GetAllProductsService");
        this.overviewService.getAllProducts()
            .subscribe((allProducts) => {
                for (let i = 0; i < allProducts.length; i++) {
                    let toAdd = new Article();
                    toAdd.id = allProducts[i].id;
                    toAdd.name = allProducts[i].name;
                    toAdd.description = allProducts[i].description;
                    toAdd.price = allProducts[i].price;
                    toAdd.image = allProducts[i].image;
                    this.products.push(toAdd);
                }
                console.log(JSON.stringify(this.products));
            });
    }

    public onItemTap(args) {
        let tappedArticle = this.products[args.index];
        console.log(tappedArticle.id);
        this.routerExtensions.navigate(["/article-detail", tappedArticle.id]);
        console.log("------------------------- ItemTapped: " + args.index);
    }
}

