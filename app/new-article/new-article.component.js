"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_article_service_1 = require("./new-article.service");
var article_model_1 = require("../shared/article/article.model");
var nativescript_angular_1 = require("nativescript-angular");
var NewArticleComponent = /** @class */ (function () {
    function NewArticleComponent(newArticleService, routerExtensions) {
        this.newArticleService = newArticleService;
        this.routerExtensions = routerExtensions;
    }
    NewArticleComponent.prototype.createNewArticle = function (name, description, price, image) {
        var _this = this;
        var newArticle = new article_model_1.Article();
        newArticle.name = name;
        newArticle.description = description;
        newArticle.price = price;
        newArticle.image = image;
        this.newArticleService.createNewArticle(newArticle).subscribe(function (newArticle) {
            _this.createdArticle = newArticle;
            _this.routerExtensions.navigate(["/overview"]);
        }, function (error) {
            console.error("ERROR");
        });
    };
    NewArticleComponent = __decorate([
        core_1.Component({
            selector: "ns-new-article",
            templateUrl: "new-article/new-article.component.html",
            styleUrls: ["new-article/new-article.component.css"]
        }),
        __metadata("design:paramtypes", [new_article_service_1.NewArticleService,
            nativescript_angular_1.RouterExtensions])
    ], NewArticleComponent);
    return NewArticleComponent;
}());
exports.NewArticleComponent = NewArticleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFydGljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LWFydGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDZEQUEwRDtBQUMxRCxpRUFBMEQ7QUFDMUQsNkRBQXdEO0FBU3hEO0lBUUksNkJBQW9CLGlCQUFvQyxFQUNwQyxnQkFBa0M7UUFEbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFHTSw4Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSztRQUF2RCxpQkFZQztRQVhHLElBQUksVUFBVSxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ3JFLEtBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTFCUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUV2RCxDQUFDO3lDQVN5Qyx1Q0FBaUI7WUFDbEIsdUNBQWdCO09BVDdDLG1CQUFtQixDQTRCL0I7SUFBRCwwQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5ld0FydGljbGVTZXJ2aWNlIH0gZnJvbSBcIi4vbmV3LWFydGljbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4uL3NoYXJlZC9hcnRpY2xlL2FydGljbGUubW9kZWxcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW5ldy1hcnRpY2xlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJuZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJuZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3QXJ0aWNsZUNvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY3JlYXRlZEFydGljbGU6IEFydGljbGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXdBcnRpY2xlU2VydmljZTogTmV3QXJ0aWNsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVOZXdBcnRpY2xlKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UpIHtcclxuICAgICAgICBsZXQgbmV3QXJ0aWNsZSA9IG5ldyBBcnRpY2xlKCk7XHJcbiAgICAgICAgbmV3QXJ0aWNsZS5uYW1lID0gbmFtZTtcclxuICAgICAgICBuZXdBcnRpY2xlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgbmV3QXJ0aWNsZS5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIG5ld0FydGljbGUuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLm5ld0FydGljbGVTZXJ2aWNlLmNyZWF0ZU5ld0FydGljbGUobmV3QXJ0aWNsZSkuc3Vic2NyaWJlKChuZXdBcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFydGljbGUgPSBuZXdBcnRpY2xlO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL292ZXJ2aWV3XCJdKTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVSUk9SXCIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==