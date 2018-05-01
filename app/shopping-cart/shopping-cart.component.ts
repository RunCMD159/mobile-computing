import { Component } from "@angular/core";
import { Cart } from "../shared/cart/cart.model";
import { CartEntry } from "../shared/cart-entry/cart-entry.model";
import { Article } from "../shared/article/article.model";
import { LocalStorageService } from "../shared/local-storage/local-storage.service";

@Component({
  selector: "ns-overview",
  templateUrl: "shopping-cart/shopping-cart.component.html",
  styleUrls: ["shopping-cart/shopping-cart.component.css"]
  
})
export class ShoppingCartComponent {

  cart: Cart;

  constructor(private localStorageService: LocalStorageService) {
    this.cart = this.localStorageService.getItem('cart');
    if (!this.cart) {
      console.log('test');
      this.cart = new Cart();
      let article1 = new Article("Article1","",10.99,"");

      let article2 = new Article("Article2","",7.99,"");
      let cartEntry1 = new CartEntry();
      cartEntry1.quantity = 2;
      cartEntry1.article = article1;
      let cartEntry2 = new CartEntry();
      cartEntry2.quantity = 4;
      cartEntry2.article = article2;
      this.cart.entries.push(cartEntry1, cartEntry2);
      this.localStorageService.setItem('cart', this.cart);
    }
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

