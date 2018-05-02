"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_detail_service_1 = require("./article-detail.service");
var nativescript_angular_1 = require("nativescript-angular");
var operators_1 = require("rxjs/operators");
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(articleDetailService, pageRoute) {
        var _this = this;
        this.articleDetailService = articleDetailService;
        this.pageRoute = pageRoute;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.id = params["id"];
            _this.articleDetailService.getArticleById(_this.id).subscribe(function (article) {
                _this.article = article;
            });
        });
    }
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-article-detail",
            templateUrl: "article-detail/article-detail.component.html",
            styleUrls: ["article-detail/article-detail.component.css"]
        }),
        __metadata("design:paramtypes", [article_detail_service_1.ArticleDetailService,
            nativescript_angular_1.PageRoute])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUFnRTtBQUVoRSw2REFBaUQ7QUFDakQsNENBQTJDO0FBUzNDO0lBS0ksZ0NBQW9CLG9CQUEwQyxFQUMxQyxTQUFvQjtRQUR4QyxpQkFVQztRQVZtQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM5QixxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNyRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDYixLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO2dCQUNoRSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWZRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBRTdELENBQUM7eUNBTTRDLDZDQUFvQjtZQUMvQixnQ0FBUztPQU4vQixzQkFBc0IsQ0FrQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlRGV0YWlsU2VydmljZSB9IGZyb20gXCIuL2FydGljbGUtZGV0YWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYXJ0aWNsZS1kZXRhaWxcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImFydGljbGUtZGV0YWlsL2FydGljbGUtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcImFydGljbGUtZGV0YWlsL2FydGljbGUtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsQ29tcG9uZW50IHtcclxuXHJcbiAgICBhcnRpY2xlOiBBcnRpY2xlO1xyXG4gICAgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGljbGVEZXRhaWxTZXJ2aWNlOiBBcnRpY2xlRGV0YWlsU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICkuZm9yRWFjaCgocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy5hcnRpY2xlRGV0YWlsU2VydmljZS5nZXRBcnRpY2xlQnlJZCh0aGlzLmlkKS5zdWJzY3JpYmUoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19