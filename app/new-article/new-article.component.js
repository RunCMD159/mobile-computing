"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_article_service_1 = require("./new-article.service");
var article_model_1 = require("../shared/article/article.model");
var NewArticleComponent = /** @class */ (function () {
    function NewArticleComponent(newArticleService) {
        this.newArticleService = newArticleService;
    }
    NewArticleComponent.prototype.createNewArticle = function (name, description, price, image) {
        var _this = this;
        var newArticle = new article_model_1.Article(name, description, price, image);
        console.log(newArticle);
        this.newArticleService.createNewArticle(newArticle).subscribe(function (newArticle) {
            _this.createdArticle = newArticle;
            console.log(newArticle.name);
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
        __metadata("design:paramtypes", [new_article_service_1.NewArticleService])
    ], NewArticleComponent);
    return NewArticleComponent;
}());
exports.NewArticleComponent = NewArticleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFydGljbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LWFydGljbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDZEQUEwRDtBQUMxRCxpRUFBMEQ7QUFTMUQ7SUFRSSw2QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFeEQsQ0FBQztJQUdNLDhDQUFnQixHQUF2QixVQUF3QixJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLO1FBQXZELGlCQVNDO1FBUkcsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQVU7WUFDckUsS0FBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBdEJRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBRXZELENBQUM7eUNBU3lDLHVDQUFpQjtPQVIvQyxtQkFBbUIsQ0F3Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZXdBcnRpY2xlU2VydmljZSB9IGZyb20gXCIuL25ldy1hcnRpY2xlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1uZXctYXJ0aWNsZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibmV3LWFydGljbGUvbmV3LWFydGljbGUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wibmV3LWFydGljbGUvbmV3LWFydGljbGUuY29tcG9uZW50LmNzc1wiXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0FydGljbGVDb21wb25lbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG5cclxuICAgIGNyZWF0ZWRBcnRpY2xlOiBBcnRpY2xlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV3QXJ0aWNsZVNlcnZpY2U6IE5ld0FydGljbGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlTmV3QXJ0aWNsZShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKSB7XHJcbiAgICAgICAgbGV0IG5ld0FydGljbGUgPSBuZXcgQXJ0aWNsZShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdBcnRpY2xlKTtcclxuICAgICAgICB0aGlzLm5ld0FydGljbGVTZXJ2aWNlLmNyZWF0ZU5ld0FydGljbGUobmV3QXJ0aWNsZSkuc3Vic2NyaWJlKChuZXdBcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlZEFydGljbGUgPSBuZXdBcnRpY2xlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdBcnRpY2xlLm5hbWUpXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUlwiKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=