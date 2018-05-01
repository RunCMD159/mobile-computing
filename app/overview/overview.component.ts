import {Article} from "../shared/article/article.model";
import {OverviewService} from "./overview.service";
import {Component, Input, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: "ns-overview",
    templateUrl: "overview/overview.component.html",
    styleUrls: ["overview/overview.component.css"],
    changeDetection: ChangeDetectionStrategy.Default
})
export class OverviewComponent {

    products: Article[] = [];
    constructor(private overviewService: OverviewService) {

    }
    ngOnInit(){
        console.log("Constructor OverviewComponent "); 
        this.getAllProducts();
    }

    public getAllProducts() {
        console.log("GetAllProductsService");  
        this.overviewService.getAllProducts()
            .subscribe((allProducts) => {
                for (let i = 0; i < allProducts.length; i++) {
                    let toAdd = new Article(
                        allProducts[i].name,
                        allProducts[i].description,
                        allProducts[i].price,
                        allProducts[i].image);
                    this.products.push(toAdd);
                }
                console.log(JSON.stringify(this.products));
            });
    }
    public onItemTap(args) {
        console.log("------------------------- ItemTapped: " + args.index);
    }
}

