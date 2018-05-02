import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Cart } from './cart.model';
import { Article } from '../article/article.model';
import { CartEntry } from '../cart-entry/cart-entry.model';

@Injectable()
export class ShoppingCartService {

    public shoppingCart: Cart;

    constructor(private localStorage: LocalStorageService) {
        this.shoppingCart = this.localStorage.getItem('cart');
        if (!this.shoppingCart) {
            this.shoppingCart = new Cart();
        }
        if (!this.shoppingCart.entries) {
            this.shoppingCart.entries = [];
        }
    }

    public addCartEntries(article: Article) {
        let alreadyPresent = this.shoppingCart.entries.find((entry) => {
            return entry.article.id === article.id;
        });
        if (alreadyPresent){
            alreadyPresent.quantity++;
        }
        else {
            let cartEntry: CartEntry = new CartEntry();
            cartEntry.article = article;
            cartEntry.quantity = 1;
            this.shoppingCart.entries.push(cartEntry);
        }
        this.localStorage.setItem('cart', this.shoppingCart);
    }
}