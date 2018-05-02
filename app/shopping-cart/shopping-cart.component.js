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
        this.saveToLocalStorage();
    };
    ShoppingCartComponent.prototype.saveToLocalStorage = function () {
        this.localStorageService.setItem('cart', this.cart);
    };
    ShoppingCartComponent.prototype.decreaseQuantity = function (cartEntry) {
        if (cartEntry.quantity === 1) {
            this.removeFromCart(this.cart, cartEntry);
        }
        else {
            cartEntry.quantity--;
        }
        this.calculateTotalPrice(this.cart);
        this.saveToLocalStorage();
    };
    ShoppingCartComponent.prototype.removeFromCart = function (cart, cartEntry) {
        var removeIndex = cart.entries.indexOf(cartEntry);
        if (removeIndex >= 0) {
            cart.entries.splice(removeIndex, 1);
        }
        this.saveToLocalStorage();
    };
    ShoppingCartComponent.prototype.calculateTotalPrice = function (cart) {
        var totalSum = 0;
        for (var _i = 0, _a = cart.entries; _i < _a.length; _i++) {
            var cartEntry = _a[_i];
            totalSum += cartEntry.article.price * cartEntry.quantity;
        }
        cart.totalSum = totalSum;
        this.saveToLocalStorage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUcxQyx1RkFBb0Y7QUFDcEYsOEVBQTJFO0FBUTNFO0lBSUksK0JBQW9CLG1CQUF3QyxFQUN4QyxtQkFBd0M7UUFEeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0lBQ3RELENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDakMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUdPLGtEQUFrQixHQUExQjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFNBQW9CO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSSxFQUFFLFNBQVM7UUFDMUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBRUQsbURBQW1CLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxDQUFrQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTdCLElBQUksU0FBUyxTQUFBO1lBQ2QsUUFBUSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBOUNRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUUzRCxDQUFDO3lDQUsyQywyQ0FBbUI7WUFDbkIsMkNBQW1CO09BTG5ELHFCQUFxQixDQStDakM7SUFBRCw0QkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhcnQgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcnQvY2FydC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDYXJ0RW50cnkgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcnQtZW50cnkvY2FydC1lbnRyeS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NhcnQvc2hvcHBpbmctY2FydC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtb3ZlcnZpZXdcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInNob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJzaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzc1wiXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQ2FydENvbXBvbmVudCB7XHJcblxyXG4gICAgY2FydDogQ2FydDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNob3BwaW5nQ2FydFNlcnZpY2U6IFNob3BwaW5nQ2FydFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgICAgIHRoaXMuY2FydCA9IHRoaXMuc2hvcHBpbmdDYXJ0U2VydmljZS5zaG9wcGluZ0NhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVhc2VRdWFudGl0eShjYXJ0RW50cnk6IENhcnRFbnRyeSkge1xyXG4gICAgICAgIGNhcnRFbnRyeS5xdWFudGl0eSsrO1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQcmljZSh0aGlzLmNhcnQpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ2NhcnQnLCB0aGlzLmNhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlYXNlUXVhbnRpdHkoY2FydEVudHJ5OiBDYXJ0RW50cnkpIHtcclxuICAgICAgICBpZiAoY2FydEVudHJ5LnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRnJvbUNhcnQodGhpcy5jYXJ0LCBjYXJ0RW50cnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcnRFbnRyeS5xdWFudGl0eS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UodGhpcy5jYXJ0KTtcclxuICAgICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21DYXJ0KGNhcnQsIGNhcnRFbnRyeSkge1xyXG4gICAgICAgIGxldCByZW1vdmVJbmRleCA9IGNhcnQuZW50cmllcy5pbmRleE9mKGNhcnRFbnRyeSk7XHJcbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY2FydC5lbnRyaWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKClcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnQpIHtcclxuICAgICAgICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNhcnRFbnRyeSBvZiBjYXJ0LmVudHJpZXMpIHtcclxuICAgICAgICAgICAgdG90YWxTdW0gKz0gY2FydEVudHJ5LmFydGljbGUucHJpY2UgKiBjYXJ0RW50cnkucXVhbnRpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhcnQudG90YWxTdW0gPSB0b3RhbFN1bTtcclxuICAgICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=