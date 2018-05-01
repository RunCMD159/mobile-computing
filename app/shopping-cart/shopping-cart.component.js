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
            var article1 = new article_model_1.Article("Article1", "", 10.99, "");
            var article2 = new article_model_1.Article("Article2", "", 7.99, "");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx3REFBaUQ7QUFDakQsMEVBQWtFO0FBQ2xFLGlFQUEwRDtBQUMxRCx1RkFBb0Y7QUFRcEY7SUFJRSwrQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7WUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBTyxDQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRW5ELElBQUksUUFBUSxHQUFHLElBQUksdUJBQU8sQ0FBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLFVBQVUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztZQUNqQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN4QixVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLFVBQVUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztZQUNqQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN4QixVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixTQUFvQjtRQUNuQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLFNBQW9CO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSSxFQUFFLFNBQVM7UUFDNUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsbURBQW1CLEdBQW5CLFVBQW9CLElBQUk7UUFDdEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLEdBQUcsQ0FBQyxDQUFrQixVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTdCLElBQUksU0FBUyxTQUFBO1lBQ2hCLFFBQVEsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFuRFUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1NBRXpELENBQUM7eUNBS3lDLDJDQUFtQjtPQUpqRCxxQkFBcUIsQ0FvRGpDO0lBQUQsNEJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJ0L2NhcnQubW9kZWxcIjtcclxuaW1wb3J0IHsgQ2FydEVudHJ5IH0gZnJvbSBcIi4uL3NoYXJlZC9jYXJ0LWVudHJ5L2NhcnQtZW50cnkubW9kZWxcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJucy1vdmVydmlld1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcInNob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wic2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3NcIl1cclxuICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQ2FydENvbXBvbmVudCB7XHJcblxyXG4gIGNhcnQ6IENhcnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5jYXJ0ID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGlmICghdGhpcy5jYXJ0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KCk7XHJcbiAgICAgIGxldCBhcnRpY2xlMSA9IG5ldyBBcnRpY2xlKFwiQXJ0aWNsZTFcIixcIlwiLDEwLjk5LFwiXCIpO1xyXG5cclxuICAgICAgbGV0IGFydGljbGUyID0gbmV3IEFydGljbGUoXCJBcnRpY2xlMlwiLFwiXCIsNy45OSxcIlwiKTtcclxuICAgICAgbGV0IGNhcnRFbnRyeTEgPSBuZXcgQ2FydEVudHJ5KCk7XHJcbiAgICAgIGNhcnRFbnRyeTEucXVhbnRpdHkgPSAyO1xyXG4gICAgICBjYXJ0RW50cnkxLmFydGljbGUgPSBhcnRpY2xlMTtcclxuICAgICAgbGV0IGNhcnRFbnRyeTIgPSBuZXcgQ2FydEVudHJ5KCk7XHJcbiAgICAgIGNhcnRFbnRyeTIucXVhbnRpdHkgPSA0O1xyXG4gICAgICBjYXJ0RW50cnkyLmFydGljbGUgPSBhcnRpY2xlMjtcclxuICAgICAgdGhpcy5jYXJ0LmVudHJpZXMucHVzaChjYXJ0RW50cnkxLCBjYXJ0RW50cnkyKTtcclxuICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ2NhcnQnLCB0aGlzLmNhcnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5jcmVhc2VRdWFudGl0eShjYXJ0RW50cnk6IENhcnRFbnRyeSkge1xyXG4gICAgY2FydEVudHJ5LnF1YW50aXR5Kys7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVRvdGFsUHJpY2UodGhpcy5jYXJ0KTtcclxuICB9XHJcblxyXG4gIGRlY3JlYXNlUXVhbnRpdHkoY2FydEVudHJ5OiBDYXJ0RW50cnkpIHtcclxuICAgIGlmIChjYXJ0RW50cnkucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgdGhpcy5yZW1vdmVGcm9tQ2FydCh0aGlzLmNhcnQsIGNhcnRFbnRyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJ0RW50cnkucXVhbnRpdHktLTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQcmljZSh0aGlzLmNhcnQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRnJvbUNhcnQoY2FydCwgY2FydEVudHJ5KSB7XHJcbiAgICBsZXQgcmVtb3ZlSW5kZXggPSBjYXJ0LmVudHJpZXMuaW5kZXhPZihjYXJ0RW50cnkpO1xyXG4gICAgaWYgKHJlbW92ZUluZGV4ID49IDApIHtcclxuICAgICAgY2FydC5lbnRyaWVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnQpIHtcclxuICAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBjYXJ0RW50cnkgb2YgY2FydC5lbnRyaWVzKSB7XHJcbiAgICAgIHRvdGFsU3VtICs9IGNhcnRFbnRyeS5hcnRpY2xlLnByaWNlICogY2FydEVudHJ5LnF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgY2FydC50b3RhbFN1bSA9IHRvdGFsU3VtO1xyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ2NhcnQnLCB0aGlzLmNhcnQpO1xyXG4gIH1cclxufVxyXG5cclxuIl19