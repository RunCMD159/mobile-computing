"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_detail_service_1 = require("./article-detail.service");
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(articleDetailService) {
        this.articleDetailService = articleDetailService;
    }
    ArticleDetailComponent.prototype.getArticleDetails = function () {
        var _this = this;
        //TODO: request by real id
        this.articleDetailService.getArticleById('').subscribe(function (article) {
            _this.article = article;
        });
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-article-detail",
            templateUrl: "article-detail/article-detail.component.html",
            styleUrls: ["article-detail/article-detail.component.css"]
        }),
        __metadata("design:paramtypes", [article_detail_service_1.ArticleDetailService])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLG1FQUE4RDtBQVU5RDtJQUlJLGdDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUU5RCxDQUFDO0lBRU0sa0RBQWlCLEdBQXhCO1FBQUEsaUJBS0M7UUFKRywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWJRLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsOENBQThDO1lBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO1NBRTdELENBQUM7eUNBSzRDLDZDQUFvQjtPQUpyRCxzQkFBc0IsQ0FlbEM7SUFBRCw2QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FydGljbGVEZXRhaWxTZXJ2aWNlfSBmcm9tIFwiLi9hcnRpY2xlLWRldGFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpY2xlL2FydGljbGUubW9kZWxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWFydGljbGUtZGV0YWlsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJhcnRpY2xlLWRldGFpbC9hcnRpY2xlLWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJhcnRpY2xlLWRldGFpbC9hcnRpY2xlLWRldGFpbC5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZURldGFpbENvbXBvbmVudCB7XHJcblxyXG4gICAgYXJ0aWNsZTogQXJ0aWNsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGljbGVEZXRhaWxTZXJ2aWNlOiBBcnRpY2xlRGV0YWlsU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXJ0aWNsZURldGFpbHMoKSB7XHJcbiAgICAgICAgLy9UT0RPOiByZXF1ZXN0IGJ5IHJlYWwgaWRcclxuICAgICAgICB0aGlzLmFydGljbGVEZXRhaWxTZXJ2aWNlLmdldEFydGljbGVCeUlkKCcnKS5zdWJzY3JpYmUoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19