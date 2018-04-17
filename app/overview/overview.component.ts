import {Component} from "@angular/core";
import {Article} from "../shared/article/article.model";
import {OverviewService} from "./overview.service";

@Component({
    selector: "ns-overview",
    templateUrl: "overview/overview.component.html",
    styleUrls: ["overview/overview.component.css"]

})
export class OverviewComponent {

    products: Article[] = [];

    constructor(private overviewService: OverviewService) {
    }

    public getAllProducts() {
        this.overviewService.getAllProducts()
            .subscribe((allProducts) => {
                this.products = allProducts;
            })
    }

}

