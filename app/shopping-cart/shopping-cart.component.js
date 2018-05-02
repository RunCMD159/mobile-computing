"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var local_storage_service_1 = require("../shared/local-storage/local-storage.service");
var shopping_cart_service_1 = require("../shared/cart/shopping-cart.service");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(localStorageService, shoppingCartService) {
        this.localStorageService = localStorageService;
        this.shoppingCartService = shoppingCartService;
        console.log('test');
        this.cart = this.shoppingCartService.shoppingCart;
    }
    ShoppingCartComponent.prototype.increaseQuantity = function (cartEntry) {
        cartEntry.quantity++;
        this.calculateTotalPrice(this.cart);
    };
    ShoppingCartComponent.prototype.decreaseQuantity = function (cartEntry) {
        if (cartEntry.quantity === 1) {
            this.removeFromCart(this.cart, cartEntry);
        }
        else {
            cartEntry.quantity--;
        }
        this.calculateTotalPrice(this.cart);
    };
    ShoppingCartComponent.prototype.removeFromCart = function (cart, cartEntry) {
        var removeIndex = cart.entries.indexOf(cartEntry);
        if (removeIndex >= 0) {
            cart.entries.splice(removeIndex, 1);
        }
    };
    ShoppingCartComponent.prototype.calculateTotalPrice = function (cart) {
        var totalSum = 0;
        for (var _i = 0, _a = cart.entries; _i < _a.length; _i++) {
            var cartEntry = _a[_i];
            totalSum += cartEntry.article.price * cartEntry.quantity;
        }
        cart.totalSum = totalSum;
        this.localStorageService.setItem('cart', this.cart);
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "shopping-cart/shopping-cart.component.html",
            styleUrls: ["shopping-cart/shopping-cart.component.css"]
        }),
        __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService,
            shopping_cart_service_1.ShoppingCartService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUcxQyx1RkFBb0Y7QUFDcEYsOEVBQTJFO0FBUTNFO0lBSUksK0JBQW9CLG1CQUF3QyxFQUN4QyxtQkFBd0M7UUFEeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0lBQ3RELENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDakMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixTQUFvQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLElBQUksRUFBRSxTQUFTO1FBQzFCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1EQUFtQixHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBa0IsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWTtZQUE3QixJQUFJLFNBQVMsU0FBQTtZQUNkLFFBQVEsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF0Q1EscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1NBRTNELENBQUM7eUNBSzJDLDJDQUFtQjtZQUNuQiwyQ0FBbUI7T0FMbkQscUJBQXFCLENBdUNqQztJQUFELDRCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC9jYXJ0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IENhcnRFbnRyeSB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC1lbnRyeS9jYXJ0LWVudHJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY2FydC9zaG9wcGluZy1jYXJ0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1vdmVydmlld1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInNob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdDYXJ0Q29tcG9uZW50IHtcclxuXHJcbiAgICBjYXJ0OiBDYXJ0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2hvcHBpbmdDYXJ0U2VydmljZTogU2hvcHBpbmdDYXJ0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgICAgdGhpcy5jYXJ0ID0gdGhpcy5zaG9wcGluZ0NhcnRTZXJ2aWNlLnNob3BwaW5nQ2FydDtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZVF1YW50aXR5KGNhcnRFbnRyeTogQ2FydEVudHJ5KSB7XHJcbiAgICAgICAgY2FydEVudHJ5LnF1YW50aXR5Kys7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKHRoaXMuY2FydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VRdWFudGl0eShjYXJ0RW50cnk6IENhcnRFbnRyeSkge1xyXG4gICAgICAgIGlmIChjYXJ0RW50cnkucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGcm9tQ2FydCh0aGlzLmNhcnQsIGNhcnRFbnRyeSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FydEVudHJ5LnF1YW50aXR5LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQcmljZSh0aGlzLmNhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0KGNhcnQsIGNhcnRFbnRyeSkge1xyXG4gICAgICAgIGxldCByZW1vdmVJbmRleCA9IGNhcnQuZW50cmllcy5pbmRleE9mKGNhcnRFbnRyeSk7XHJcbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY2FydC5lbnRyaWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydCkge1xyXG4gICAgICAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY2FydEVudHJ5IG9mIGNhcnQuZW50cmllcykge1xyXG4gICAgICAgICAgICB0b3RhbFN1bSArPSBjYXJ0RW50cnkuYXJ0aWNsZS5wcmljZSAqIGNhcnRFbnRyeS5xdWFudGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FydC50b3RhbFN1bSA9IHRvdGFsU3VtO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXRJdGVtKCdjYXJ0JywgdGhpcy5jYXJ0KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19