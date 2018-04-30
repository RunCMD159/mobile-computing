"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var article_detail_service_1 = require("./article-detail.service");
var article_model_1 = require("../shared/article/article.model");
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(articleDetailService) {
        //let a = this.articleDetailService.getArticleById()
        this.articleDetailService = articleDetailService;
        this.article = new article_model_1.Article();
        this.article.name = "Artikel 1";
        //this.article.description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem";
        this.article.description = "Lorem ipsum dolor ";
        this.article.price = 3.333;
        this.article.image = "https://www.google.com/images/errors/logo_sm_2.png";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLG1FQUE4RDtBQUM5RCxpRUFBd0Q7QUFTeEQ7SUFJSSxnQ0FBb0Isb0JBQTBDO1FBQzFELG9EQUFvRDtRQURwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBRzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLGlUQUFpVDtRQUNqVCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsb0RBQW9ELENBQUM7SUFFOUUsQ0FBQztJQUVNLGtEQUFpQixHQUF4QjtRQUFBLGlCQUtDO1FBSkcsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTztZQUMzRCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFyQlEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7U0FFN0QsQ0FBQzt5Q0FLNEMsNkNBQW9CO09BSnJELHNCQUFzQixDQXVCbEM7SUFBRCw2QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBcnRpY2xlRGV0YWlsU2VydmljZX0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwuc2VydmljZVwiO1xuaW1wb3J0IHtBcnRpY2xlfSBmcm9tIFwiLi4vc2hhcmVkL2FydGljbGUvYXJ0aWNsZS5tb2RlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFydGljbGUtZGV0YWlsXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImFydGljbGUtZGV0YWlsL2FydGljbGUtZGV0YWlsLmNvbXBvbmVudC5jc3NcIl1cblxufSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsQ29tcG9uZW50IHtcblxuICAgIGFydGljbGU6IEFydGljbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFydGljbGVEZXRhaWxTZXJ2aWNlOiBBcnRpY2xlRGV0YWlsU2VydmljZSkge1xuICAgICAgICAvL2xldCBhID0gdGhpcy5hcnRpY2xlRGV0YWlsU2VydmljZS5nZXRBcnRpY2xlQnlJZCgpXG5cbiAgICAgICAgdGhpcy5hcnRpY2xlID0gbmV3IEFydGljbGUoKTtcbiAgICAgICAgdGhpcy5hcnRpY2xlLm5hbWUgPSBcIkFydGlrZWwgMVwiO1xuICAgICAgICAvL3RoaXMuYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtXCI7XG4gICAgICAgIHRoaXMuYXJ0aWNsZS5kZXNjcmlwdGlvbiA9IFwiTG9yZW0gaXBzdW0gZG9sb3IgXCI7XG4gICAgICAgIHRoaXMuYXJ0aWNsZS5wcmljZSA9IDMuMzMzO1xuICAgICAgICB0aGlzLmFydGljbGUuaW1hZ2UgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2Vycm9ycy9sb2dvX3NtXzIucG5nXCI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXJ0aWNsZURldGFpbHMoKSB7XG4gICAgICAgIC8vVE9ETzogcmVxdWVzdCBieSByZWFsIGlkXG4gICAgICAgIHRoaXMuYXJ0aWNsZURldGFpbFNlcnZpY2UuZ2V0QXJ0aWNsZUJ5SWQoJycpLnN1YnNjcmliZSgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuIl19