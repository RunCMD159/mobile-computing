"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cart_model_1 = require("../shared/cart/cart.model");
var cart_entry_model_1 = require("../shared/cart-entry/cart-entry.model");
var article_model_1 = require("../shared/article/article.model");
var local_storage_service_1 = require("../shared/local-storage/local-storage.service");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.cart = this.localStorageService.getItem('cart');
        if (!this.cart) {
            console.log('test');
            this.cart = new cart_model_1.Cart();
            var article1 = new article_model_1.Article();
            article1.name = "Article1";
            article1.price = 10.99;
            var article2 = new article_model_1.Article();
            article2.name = "Article2";
            article2.price = 7.99;
            var cartEntry1 = new cart_entry_model_1.CartEntry();
            cartEntry1.quantity = 2;
            cartEntry1.article = article1;
            var cartEntry2 = new cart_entry_model_1.CartEntry();
            cartEntry2.quantity = 4;
            cartEntry2.article = article2;
            this.cart.entries.push(cartEntry1, cartEntry2);
            this.localStorageService.setItem('cart', this.cart);
        }
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
        __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx3REFBaUQ7QUFDakQsMEVBQWtFO0FBQ2xFLGlFQUEwRDtBQUMxRCx1RkFBb0Y7QUFRcEY7SUFJRSwrQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDM0IsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFDM0IsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUM7WUFDakMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxVQUFVLEdBQUcsSUFBSSw0QkFBUyxFQUFFLENBQUM7WUFDakMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDeEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixTQUFvQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLElBQUksRUFBRSxTQUFTO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELG1EQUFtQixHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBa0IsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWTtZQUE3QixJQUFJLFNBQVMsU0FBQTtZQUNoQixRQUFRLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMxRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBdERVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztTQUV6RCxDQUFDO3lDQUt5QywyQ0FBbUI7T0FKakQscUJBQXFCLENBdURqQztJQUFELDRCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC9jYXJ0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IENhcnRFbnRyeSB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC1lbnRyeS9jYXJ0LWVudHJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vc2hhcmVkL2FydGljbGUvYXJ0aWNsZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtb3ZlcnZpZXdcIixcclxuICB0ZW1wbGF0ZVVybDogXCJzaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInNob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzXCJdXHJcbiAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnRDb21wb25lbnQge1xyXG5cclxuICBjYXJ0OiBDYXJ0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuY2FydCA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICBpZiAoIXRoaXMuY2FydCkge1xyXG4gICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG4gICAgICB0aGlzLmNhcnQgPSBuZXcgQ2FydCgpO1xyXG4gICAgICBsZXQgYXJ0aWNsZTEgPSBuZXcgQXJ0aWNsZSgpO1xyXG4gICAgICBhcnRpY2xlMS5uYW1lID0gXCJBcnRpY2xlMVwiO1xyXG4gICAgICBhcnRpY2xlMS5wcmljZSA9IDEwLjk5O1xyXG4gICAgICBsZXQgYXJ0aWNsZTIgPSBuZXcgQXJ0aWNsZSgpO1xyXG4gICAgICBhcnRpY2xlMi5uYW1lID0gXCJBcnRpY2xlMlwiO1xyXG4gICAgICBhcnRpY2xlMi5wcmljZSA9IDcuOTk7XHJcbiAgICAgIGxldCBjYXJ0RW50cnkxID0gbmV3IENhcnRFbnRyeSgpO1xyXG4gICAgICBjYXJ0RW50cnkxLnF1YW50aXR5ID0gMjtcclxuICAgICAgY2FydEVudHJ5MS5hcnRpY2xlID0gYXJ0aWNsZTE7XHJcbiAgICAgIGxldCBjYXJ0RW50cnkyID0gbmV3IENhcnRFbnRyeSgpO1xyXG4gICAgICBjYXJ0RW50cnkyLnF1YW50aXR5ID0gNDtcclxuICAgICAgY2FydEVudHJ5Mi5hcnRpY2xlID0gYXJ0aWNsZTI7XHJcbiAgICAgIHRoaXMuY2FydC5lbnRyaWVzLnB1c2goY2FydEVudHJ5MSwgY2FydEVudHJ5Mik7XHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXRJdGVtKCdjYXJ0JywgdGhpcy5jYXJ0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluY3JlYXNlUXVhbnRpdHkoY2FydEVudHJ5OiBDYXJ0RW50cnkpIHtcclxuICAgIGNhcnRFbnRyeS5xdWFudGl0eSsrO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKHRoaXMuY2FydCk7XHJcbiAgfVxyXG5cclxuICBkZWNyZWFzZVF1YW50aXR5KGNhcnRFbnRyeTogQ2FydEVudHJ5KSB7XHJcbiAgICBpZiAoY2FydEVudHJ5LnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRnJvbUNhcnQodGhpcy5jYXJ0LCBjYXJ0RW50cnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydEVudHJ5LnF1YW50aXR5LS07XHJcbiAgICB9XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UodGhpcy5jYXJ0KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21DYXJ0KGNhcnQsIGNhcnRFbnRyeSkge1xyXG4gICAgbGV0IHJlbW92ZUluZGV4ID0gY2FydC5lbnRyaWVzLmluZGV4T2YoY2FydEVudHJ5KTtcclxuICAgIGlmIChyZW1vdmVJbmRleCA+PSAwKSB7XHJcbiAgICAgIGNhcnQuZW50cmllcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlVG90YWxQcmljZShjYXJ0KSB7XHJcbiAgICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gICAgZm9yIChsZXQgY2FydEVudHJ5IG9mIGNhcnQuZW50cmllcykge1xyXG4gICAgICB0b3RhbFN1bSArPSBjYXJ0RW50cnkuYXJ0aWNsZS5wcmljZSAqIGNhcnRFbnRyeS5xdWFudGl0eTtcclxuICAgIH1cclxuICAgIGNhcnQudG90YWxTdW0gPSB0b3RhbFN1bTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXRJdGVtKCdjYXJ0JywgdGhpcy5jYXJ0KTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==