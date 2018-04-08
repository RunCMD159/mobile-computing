import {Component, Input, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {EventData, Observable} from "data/observable";


@Component({
    selector: 'common-actionbar',
    templateUrl: 'common-actionbar/common-actionbar.component.html'
})

export class CommonActionbarComponent implements OnInit {

    @Input() title: string;
    @Input() shoppingCartEnabled: boolean;
    @Input() newArticleEnabled: boolean;

    constructor(private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
    }

    onAddNewArticle(args: EventData) {
        this.routerExtensions.navigate(["/new-article"]);
    }

    onGotoShoppingCart(args: EventData) {
        this.routerExtensions.navigate(["/shopping-cart"]);
    }

    onNavBtnTap() {
        this.routerExtensions.back();
    }
}