import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Cart } from './cart.model';
import { Article } from '../article/article.model';
import { CartEntry } from '../cart-entry/cart-entry.model';

@Injectable()
export class ShoppingCartService  {

    public shoppingCart: Cart;

    constructor(private localStorage: LocalStorageService) {
        this.shoppingCart = this.localStorage.getItem('cart');
        console.log("init");
        if (!this.shoppingCart) {
            this.shoppingCart = new Cart();
            console.log("if1");
        }
        if (!this.shoppingCart.entries) {
            this.shoppingCart.entries = [];
            console.log("if2");
        }
    }

    public addCartEntries(article: Article) {
        let cartEntry: CartEntry = new CartEntry();
        cartEntry.article = article;
        cartEntry.quantity = 1;
        this.shoppingCart.entries.push(cartEntry);
        this.localStorage.setItem('cart', this.shoppingCart);
    }
}