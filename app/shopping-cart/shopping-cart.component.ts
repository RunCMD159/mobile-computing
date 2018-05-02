import { Component } from "@angular/core";
import { Cart } from "../shared/cart/cart.model";
import { CartEntry } from "../shared/cart-entry/cart-entry.model";
import { LocalStorageService } from "../shared/local-storage/local-storage.service";
import { ShoppingCartService } from '../shared/cart/shopping-cart.service';

@Component({
    selector: "ns-overview",
    templateUrl: "shopping-cart/shopping-cart.component.html",
    styleUrls: ["shopping-cart/shopping-cart.component.css"]

})
export class ShoppingCartComponent {

    cart: Cart;

    constructor(private localStorageService: LocalStorageService,
                private shoppingCartService: ShoppingCartService) {
        console.log('test');
        this.cart = this.shoppingCartService.shoppingCart;
    }

    increaseQuantity(cartEntry: CartEntry) {
        cartEntry.quantity++;
        this.calculateTotalPrice(this.cart);
    }

    decreaseQuantity(cartEntry: CartEntry) {
        if (cartEntry.quantity === 1) {
            this.removeFromCart(this.cart, cartEntry);
        } else {
            cartEntry.quantity--;
        }
        this.calculateTotalPrice(this.cart);
    }

    removeFromCart(cart, cartEntry) {
        let removeIndex = cart.entries.indexOf(cartEntry);
        if (removeIndex >= 0) {
            cart.entries.splice(removeIndex, 1);
        }
    }

    calculateTotalPrice(cart) {
        let totalSum = 0;
        for (let cartEntry of cart.entries) {
            totalSum += cartEntry.article.price * cartEntry.quantity;
        }
        cart.totalSum = totalSum;
        this.localStorageService.setItem('cart', this.cart);
    }
}

