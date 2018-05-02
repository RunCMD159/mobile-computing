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
    OverviewComponent.prototype.onItemTap = function (args) {
        var tappedArticle = this.products[args.index];
        console.log(tappedArticle.id);
        this.routerExtensions.navigate(["/article-detail", tappedArticle.id]);
        console.log("------------------------- ItemTapped: " + args.index);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTBEO0FBQzFELHVEQUFxRDtBQUNyRCxzQ0FBbUU7QUFDbkUsNkRBQXdEO0FBQ3hELDhFQUEyRTtBQVMzRTtJQUlJLDJCQUFvQixlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsbUJBQXdDO1FBRnhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFKNUQsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQU16QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBZUM7UUFkRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7YUFDaEMsU0FBUyxDQUFDLFVBQUMsV0FBVztZQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7Z0JBQzFCLEtBQUssQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQy9DLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLHFDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSw2Q0FBaUIsR0FBeEIsVUFBeUIsV0FBb0I7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBM0NRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsT0FBTztTQUNuRCxDQUFDO3lDQUt1QyxrQ0FBZTtZQUNkLHVDQUFnQjtZQUNiLDJDQUFtQjtPQU5uRCxpQkFBaUIsQ0E0QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpY2xlL2FydGljbGUubW9kZWxcIjtcclxuaW1wb3J0IHsgT3ZlcnZpZXdTZXJ2aWNlIH0gZnJvbSBcIi4vb3ZlcnZpZXcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY2FydC9zaG9wcGluZy1jYXJ0LnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtb3ZlcnZpZXdcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIm92ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIm92ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9kdWN0czogQXJ0aWNsZVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVydmlld1NlcnZpY2U6IE92ZXJ2aWV3U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2hvcHBpbmdDYXJ0U2VydmljZTogU2hvcHBpbmdDYXJ0U2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdG9yIE92ZXJ2aWV3Q29tcG9uZW50IFwiKTtcclxuICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxQcm9kdWN0cygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldEFsbFByb2R1Y3RzU2VydmljZVwiKTtcclxuICAgICAgICB0aGlzLm92ZXJ2aWV3U2VydmljZS5nZXRBbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGFsbFByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvQWRkID0gbmV3IEFydGljbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5pZCA9IGFsbFByb2R1Y3RzW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLm5hbWUgPSBhbGxQcm9kdWN0c1tpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLmRlc2NyaXB0aW9uID0gYWxsUHJvZHVjdHNbaV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQucHJpY2UgPSBhbGxQcm9kdWN0c1tpXS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5pbWFnZSA9IGFsbFByb2R1Y3RzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaCh0b0FkZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RzKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGxldCB0YXBwZWRBcnRpY2xlID0gdGhpcy5wcm9kdWN0c1thcmdzLmluZGV4XTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXBwZWRBcnRpY2xlLmlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FydGljbGUtZGV0YWlsXCIsIHRhcHBlZEFydGljbGUuaWRdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbVRhcHBlZDogXCIgKyBhcmdzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG9TaG9wcGluZ0NhcnQoY2FydEFydGljbGU6IEFydGljbGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJ0QXJ0aWNsZS5uYW1lKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQ2FydFNlcnZpY2UuYWRkQ2FydEVudHJpZXMoY2FydEFydGljbGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=