"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_model_1 = require("../shared/article/article.model");
var overview_service_1 = require("./overview.service");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var shopping_cart_service_1 = require("../shared/cart/shopping-cart.service");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewService, routerExtensions, shoppingCartService) {
        this.overviewService = overviewService;
        this.routerExtensions = routerExtensions;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        console.log("Constructor OverviewComponent ");
        this.getAllProducts();
    };
    OverviewComponent.prototype.getAllProducts = function () {
        var _this = this;
        console.log("GetAllProductsService");
        this.overviewService.getAllProducts()
            .subscribe(function (allProducts) {
            for (var i = 0; i < allProducts.length; i++) {
                var toAdd = new article_model_1.Article();
                toAdd.id = allProducts[i].id;
                toAdd.name = allProducts[i].name;
                toAdd.description = allProducts[i].description;
                toAdd.price = allProducts[i].price;
                toAdd.image = allProducts[i].image;
                _this.products.push(toAdd);
            }
            console.log(JSON.stringify(_this.products));
        });
    };
    OverviewComponent.prototype.onItemTap = function (index) {
        var tappedArticle = this.products[index];
        console.log(tappedArticle.id);
        this.routerExtensions.navigate(["/article-detail", tappedArticle.id]);
        console.log("------------------------- ItemTapped: " + index);
    };
    OverviewComponent.prototype.addToShoppingCart = function (cartArticle) {
        console.log(cartArticle.name);
        this.shoppingCartService.addCartEntries(cartArticle);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "overview/overview.component.html",
            styleUrls: ["overview/overview.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [overview_service_1.OverviewService,
            nativescript_angular_1.RouterExtensions,
            shopping_cart_service_1.ShoppingCartService])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTBEO0FBQzFELHVEQUFxRDtBQUNyRCxzQ0FBbUU7QUFDbkUsNkRBQXdEO0FBQ3hELDhFQUEyRTtBQVMzRTtJQUlJLDJCQUFvQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsbUJBQXdDO1FBRnhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFKNUQsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQU16QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBZUM7UUFkRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7YUFDaEMsU0FBUyxDQUFDLFVBQUMsV0FBVztZQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLHFDQUFTLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sNkNBQWlCLEdBQXhCLFVBQXlCLFdBQW9CO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTNDUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE9BQU87U0FDbkQsQ0FBQzt5Q0FLdUMsa0NBQWU7WUFDZCx1Q0FBZ0I7WUFDYiwyQ0FBbUI7T0FObkQsaUJBQWlCLENBNEM3QjtJQUFELHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE92ZXJ2aWV3U2VydmljZSB9IGZyb20gXCIuL292ZXJ2aWV3LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTaG9wcGluZ0NhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NhcnQvc2hvcHBpbmctY2FydC5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW92ZXJ2aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVydmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvZHVjdHM6IEFydGljbGVbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcnZpZXdTZXJ2aWNlOiBPdmVydmlld1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNob3BwaW5nQ2FydFNlcnZpY2U6IFNob3BwaW5nQ2FydFNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3RvciBPdmVydmlld0NvbXBvbmVudCBcIik7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXRBbGxQcm9kdWN0c1NlcnZpY2VcIik7XHJcbiAgICAgICAgdGhpcy5vdmVydmlld1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChhbGxQcm9kdWN0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0FkZCA9IG5ldyBBcnRpY2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQuaWQgPSBhbGxQcm9kdWN0c1tpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5uYW1lID0gYWxsUHJvZHVjdHNbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5kZXNjcmlwdGlvbiA9IGFsbFByb2R1Y3RzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLnByaWNlID0gYWxsUHJvZHVjdHNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQuaW1hZ2UgPSBhbGxQcm9kdWN0c1tpXS5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2godG9BZGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRhcHBlZEFydGljbGUgPSB0aGlzLnByb2R1Y3RzW2luZGV4XTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXBwZWRBcnRpY2xlLmlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FydGljbGUtZGV0YWlsXCIsIHRhcHBlZEFydGljbGUuaWRdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbVRhcHBlZDogXCIgKyBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFRvU2hvcHBpbmdDYXJ0KGNhcnRBcnRpY2xlOiBBcnRpY2xlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydEFydGljbGUubmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0NhcnRTZXJ2aWNlLmFkZENhcnRFbnRyaWVzKGNhcnRBcnRpY2xlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19