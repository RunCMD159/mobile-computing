"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cart_model_1 = require("../shared/cart/cart.model");
var cart_entry_model_1 = require("../shared/cart-entry/cart-entry.model");
var article_model_1 = require("../shared/article/article.model");
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
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
    };
    ShoppingCartComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "shopping-cart/shopping-cart.component.html",
            styleUrls: ["shopping-cart/shopping-cart.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());
exports.ShoppingCartComponent = ShoppingCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyx3REFBaUQ7QUFDakQsMEVBQWtFO0FBQ2xFLGlFQUEwRDtBQVExRDtJQUlFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztRQUNqQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QixVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztRQUNqQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN4QixVQUFVLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsU0FBb0I7UUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixTQUFvQjtRQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLElBQUksRUFBRSxTQUFTO1FBQzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVELG1EQUFtQixHQUFuQixVQUFvQixJQUFJO1FBQ3RCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixHQUFHLENBQUMsQ0FBa0IsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWTtZQUE3QixJQUFJLFNBQVMsU0FBQTtZQUNoQixRQUFRLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUMxRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFoRFUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1NBRXpELENBQUM7O09BQ1cscUJBQXFCLENBaURqQztJQUFELDRCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC9jYXJ0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IENhcnRFbnRyeSB9IGZyb20gXCIuLi9zaGFyZWQvY2FydC1lbnRyeS9jYXJ0LWVudHJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi4vc2hhcmVkL2FydGljbGUvYXJ0aWNsZS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibnMtb3ZlcnZpZXdcIixcclxuICB0ZW1wbGF0ZVVybDogXCJzaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInNob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzXCJdXHJcbiAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnRDb21wb25lbnQge1xyXG5cclxuICBjYXJ0OiBDYXJ0O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KCk7XHJcbiAgICBsZXQgYXJ0aWNsZTEgPSBuZXcgQXJ0aWNsZSgpO1xyXG4gICAgYXJ0aWNsZTEubmFtZSA9IFwiQXJ0aWNsZTFcIjtcclxuICAgIGFydGljbGUxLnByaWNlID0gMTAuOTk7XHJcbiAgICBsZXQgYXJ0aWNsZTIgPSBuZXcgQXJ0aWNsZSgpO1xyXG4gICAgYXJ0aWNsZTIubmFtZSA9IFwiQXJ0aWNsZTJcIjtcclxuICAgIGFydGljbGUyLnByaWNlID0gNy45OTtcclxuICAgIGxldCBjYXJ0RW50cnkxID0gbmV3IENhcnRFbnRyeSgpO1xyXG4gICAgY2FydEVudHJ5MS5xdWFudGl0eSA9IDI7XHJcbiAgICBjYXJ0RW50cnkxLmFydGljbGUgPSBhcnRpY2xlMTtcclxuICAgIGxldCBjYXJ0RW50cnkyID0gbmV3IENhcnRFbnRyeSgpO1xyXG4gICAgY2FydEVudHJ5Mi5xdWFudGl0eSA9IDQ7XHJcbiAgICBjYXJ0RW50cnkyLmFydGljbGUgPSBhcnRpY2xlMjtcclxuICAgIHRoaXMuY2FydC5lbnRyaWVzLnB1c2goY2FydEVudHJ5MSwgY2FydEVudHJ5Mik7XHJcbiAgfVxyXG5cclxuICBpbmNyZWFzZVF1YW50aXR5KGNhcnRFbnRyeTogQ2FydEVudHJ5KSB7XHJcbiAgICBjYXJ0RW50cnkucXVhbnRpdHkrKztcclxuICAgIHRoaXMuY2FsY3VsYXRlVG90YWxQcmljZSh0aGlzLmNhcnQpO1xyXG4gIH1cclxuXHJcbiAgZGVjcmVhc2VRdWFudGl0eShjYXJ0RW50cnk6IENhcnRFbnRyeSkge1xyXG4gICAgaWYgKGNhcnRFbnRyeS5xdWFudGl0eSA9PT0gMSkge1xyXG4gICAgICB0aGlzLnJlbW92ZUZyb21DYXJ0KHRoaXMuY2FydCwgY2FydEVudHJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcnRFbnRyeS5xdWFudGl0eS0tO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWxjdWxhdGVUb3RhbFByaWNlKHRoaXMuY2FydCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVGcm9tQ2FydChjYXJ0LCBjYXJ0RW50cnkpIHtcclxuICAgIGxldCByZW1vdmVJbmRleCA9IGNhcnQuZW50cmllcy5pbmRleE9mKGNhcnRFbnRyeSk7XHJcbiAgICBpZiAocmVtb3ZlSW5kZXggPj0gMCkge1xyXG4gICAgICBjYXJ0LmVudHJpZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVRvdGFsUHJpY2UoY2FydCkge1xyXG4gICAgbGV0IHRvdGFsU3VtID0gMDtcclxuICAgIGZvciAobGV0IGNhcnRFbnRyeSBvZiBjYXJ0LmVudHJpZXMpIHtcclxuICAgICAgdG90YWxTdW0gKz0gY2FydEVudHJ5LmFydGljbGUucHJpY2UgKiBjYXJ0RW50cnkucXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICBjYXJ0LnRvdGFsU3VtID0gdG90YWxTdW07XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=