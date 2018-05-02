"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_model_1 = require("../shared/article/article.model");
var overview_service_1 = require("./overview.service");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewService, routerExtensions) {
        this.overviewService = overviewService;
        this.routerExtensions = routerExtensions;
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
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "overview/overview.component.html",
            styleUrls: ["overview/overview.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        }),
        __metadata("design:paramtypes", [overview_service_1.OverviewService,
            nativescript_angular_1.RouterExtensions])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTBEO0FBQzFELHVEQUFxRDtBQUNyRCxzQ0FBc0Y7QUFDdEYsNkRBQXdEO0FBU3hEO0lBSUksMkJBQW9CLGVBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUh0RCxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBS3pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRU0sMENBQWMsR0FBckI7UUFBQSxpQkFlQztRQWRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNoQyxTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM3QixLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXJDUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE9BQU87U0FDbkQsQ0FBQzt5Q0FLdUMsa0NBQWU7WUFDZCx1Q0FBZ0I7T0FMN0MsaUJBQWlCLENBc0M3QjtJQUFELHdCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE92ZXJ2aWV3U2VydmljZSB9IGZyb20gXCIuL292ZXJ2aWV3LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW92ZXJ2aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPdmVydmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvZHVjdHM6IEFydGljbGVbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcnZpZXdTZXJ2aWNlOiBPdmVydmlld1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25zdHJ1Y3RvciBPdmVydmlld0NvbXBvbmVudCBcIik7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXRBbGxQcm9kdWN0c1NlcnZpY2VcIik7XHJcbiAgICAgICAgdGhpcy5vdmVydmlld1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChhbGxQcm9kdWN0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0FkZCA9IG5ldyBBcnRpY2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQuaWQgPSBhbGxQcm9kdWN0c1tpXS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5uYW1lID0gYWxsUHJvZHVjdHNbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5kZXNjcmlwdGlvbiA9IGFsbFByb2R1Y3RzW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLnByaWNlID0gYWxsUHJvZHVjdHNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQuaW1hZ2UgPSBhbGxQcm9kdWN0c1tpXS5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2godG9BZGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBsZXQgdGFwcGVkQXJ0aWNsZSA9IHRoaXMucHJvZHVjdHNbYXJncy5pbmRleF07XHJcbiAgICAgICAgY29uc29sZS5sb2codGFwcGVkQXJ0aWNsZS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hcnRpY2xlLWRldGFpbFwiLCB0YXBwZWRBcnRpY2xlLmlkXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW1UYXBwZWQ6IFwiICsgYXJncy5pbmRleCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==