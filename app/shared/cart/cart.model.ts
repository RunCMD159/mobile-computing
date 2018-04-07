import { CartEntry } from "../cart-entry/cart-entry.model";

export class Cart {
    entries: CartEntry[] = [];
    totalSum: number = 0;
}