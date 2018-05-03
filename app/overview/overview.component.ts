import { Article } from "../shared/article/article.model";
import { OverviewService } from "./overview.service";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ShoppingCartService } from '../shared/cart/shopping-cart.service';


@Component({
    selector: "ns-overview",
    templateUrl: "overview/overview.component.html",
    styleUrls: ["overview/overview.component.css"],
    changeDetection: ChangeDetectionStrategy.Default
})
export class OverviewComponent {

    products: Article[] = [];

    constructor(private overviewService: OverviewService,
                private routerExtensions: RouterExtensions,
                private shoppingCartService: ShoppingCartService) {

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

    public onItemTap(index) {
        let tappedArticle = this.products[index];
        console.log(tappedArticle.id);
        this.routerExtensions.navigate(["/article-detail", tappedArticle.id]);
        console.log("------------------------- ItemTapped: " + index);
    }

    public addToShoppingCart(cartArticle: Article) {
        console.log(cartArticle.name);
        this.shoppingCartService.addCartEntries(cartArticle);
    }
}

