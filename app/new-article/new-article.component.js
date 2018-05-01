"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_article_service_1 = require("./new-article.service");
var NewArticleComponent = /** @class */ (function () {
    function NewArticleComponent(newArticleService) {
        this.newArticleService = newArticleService;
    }
    NewArticleComponent.prototype.createNewArticle = function () {
        //TODO: fill params
        // this.newArticleService.createNewArticle().subscribe((newArticle) => {
        //     this.createdArticle = newArticle;
        // })
    };
    NewArticleComponent = __decorate([
        core_1.Component({
            selector: "ns-new-article",
            templateUrl: "new-article/new-article.component.html",
            styleUrls: ["new-article/new-article.component.css"]
        }),
        __metadata("design:paramtypes", [new_article_service_1.NewArticleService])
    ], NewArticleComponent);
    return NewArticleComponent;
}());
exports.NewArticleComponent = NewArticleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFydGljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LWFydGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDZEQUF3RDtBQVV4RDtJQVFJLDZCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUV4RCxDQUFDO0lBR00sOENBQWdCLEdBQXZCO1FBQ0ksbUJBQW1CO1FBQ25CLHdFQUF3RTtRQUN4RSx3Q0FBd0M7UUFDeEMsS0FBSztJQUNULENBQUM7SUFsQlEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7U0FFdkQsQ0FBQzt5Q0FTeUMsdUNBQWlCO09BUi9DLG1CQUFtQixDQW9CL0I7SUFBRCwwQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05ld0FydGljbGVTZXJ2aWNlfSBmcm9tIFwiLi9uZXctYXJ0aWNsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXJ0aWNsZX0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpY2xlL2FydGljbGUubW9kZWxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW5ldy1hcnRpY2xlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJuZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJuZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3QXJ0aWNsZUNvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY3JlYXRlZEFydGljbGU6IEFydGljbGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdBcnRpY2xlU2VydmljZTogTmV3QXJ0aWNsZVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVOZXdBcnRpY2xlKCkge1xyXG4gICAgICAgIC8vVE9ETzogZmlsbCBwYXJhbXNcclxuICAgICAgICAvLyB0aGlzLm5ld0FydGljbGVTZXJ2aWNlLmNyZWF0ZU5ld0FydGljbGUoKS5zdWJzY3JpYmUoKG5ld0FydGljbGUpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jcmVhdGVkQXJ0aWNsZSA9IG5ld0FydGljbGU7XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==