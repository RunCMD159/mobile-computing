"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_detail_service_1 = require("./article-detail.service");
var nativescript_angular_1 = require("nativescript-angular");
var operators_1 = require("rxjs/operators");
var shopping_cart_service_1 = require("../shared/cart/shopping-cart.service");
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(articleDetailService, pageRoute, shoppingCartService) {
        var _this = this;
        this.articleDetailService = articleDetailService;
        this.pageRoute = pageRoute;
        this.shoppingCartService = shoppingCartService;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.id = params["id"];
            _this.articleDetailService.getArticleById(_this.id).subscribe(function (article) {
                _this.article = article;
            });
        });
    }
    ArticleDetailComponent.prototype.addToShoppingCart = function () {
        this.shoppingCartService.addCartEntries(this.article);
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-article-detail",
            templateUrl: "article-detail/article-detail.component.html",
            styleUrls: ["article-detail/article-detail.component.css"]
        }),
        __metadata("design:paramtypes", [article_detail_service_1.ArticleDetailService,
            nativescript_angular_1.PageRoute,
            shopping_cart_service_1.ShoppingCartService])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFnRTtBQUVoRSw2REFBaUQ7QUFDakQsNENBQTJDO0FBQzNDLDhFQUEyRTtBQVMzRTtJQUtJLGdDQUFvQixvQkFBMEMsRUFDMUMsU0FBb0IsRUFDcEIsbUJBQXdDO1FBRjVELGlCQVdDO1FBWG1CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ2IsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztnQkFDaEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrREFBaUIsR0FBeEI7UUFFSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBckJRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBRTdELENBQUM7eUNBTTRDLDZDQUFvQjtZQUMvQixnQ0FBUztZQUNDLDJDQUFtQjtPQVBuRCxzQkFBc0IsQ0F3QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXJ0aWNsZURldGFpbFNlcnZpY2UgfSBmcm9tIFwiLi9hcnRpY2xlLWRldGFpbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpY2xlL2FydGljbGUubW9kZWxcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNob3BwaW5nQ2FydFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2NhcnQvc2hvcHBpbmctY2FydC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXJ0aWNsZS1kZXRhaWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcnRpY2xlLWRldGFpbC9hcnRpY2xlLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmNzc1wiXVxuXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVEZXRhaWxDb21wb25lbnQge1xuXG4gICAgYXJ0aWNsZTogQXJ0aWNsZTtcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpY2xlRGV0YWlsU2VydmljZTogQXJ0aWNsZURldGFpbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNob3BwaW5nQ2FydFNlcnZpY2U6IFNob3BwaW5nQ2FydFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkID0gcGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICB0aGlzLmFydGljbGVEZXRhaWxTZXJ2aWNlLmdldEFydGljbGVCeUlkKHRoaXMuaWQpLnN1YnNjcmliZSgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVG9TaG9wcGluZ0NhcnQoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNob3BwaW5nQ2FydFNlcnZpY2UuYWRkQ2FydEVudHJpZXModGhpcy5hcnRpY2xlKTtcbiAgICB9XG5cblxufVxuXG4iXX0=