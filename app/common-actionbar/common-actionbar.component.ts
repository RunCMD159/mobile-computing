import { Component, Input, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular";
import { EventData } from "data/observable";
import { LocalStorageService } from '../shared/local-storage/local-storage.service';


@Component({
    selector: 'common-actionbar',
    templateUrl: 'common-actionbar/common-actionbar.component.html'
})

export class CommonActionbarComponent implements OnInit {

    @Input() title: string;
    @Input() shoppingCartEnabled: boolean;
    @Input() newArticleEnabled: boolean;

    constructor(private routerExtensions: RouterExtensions,
                private localStorage: LocalStorageService) {
    }

    ngOnInit() {
    }

    onAddNewArticle() {
        this.routerExtensions.navigate(["/new-article"]);
    }

    onGotoShoppingCart() {
        this.routerExtensions.navigate(["/shopping-cart"]);
    }

    onNavBtnTap() {
        this.routerExtensions.back();
    }

    logout() {
        this.localStorage.setItem('user', null);
        this.localStorage.setItem('cart', null);
        this.routerExtensions.navigate(["/login"]);
    }
}