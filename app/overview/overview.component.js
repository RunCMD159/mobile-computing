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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTBEO0FBQzFELHVEQUFxRDtBQUNyRCxzQ0FBbUU7QUFDbkUsNkRBQXdEO0FBU3hEO0lBSUksMkJBQW9CLGVBQWdDLEVBQ2hDLGdCQUFrQztRQURsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUh0RCxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBS3pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sMENBQWMsR0FBckI7UUFBQSxpQkFlQztRQWRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNoQyxTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM3QixLQUFLLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXBDUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE9BQU87U0FDbkQsQ0FBQzt5Q0FLdUMsa0NBQWU7WUFDZCx1Q0FBZ0I7T0FMN0MsaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7IE92ZXJ2aWV3U2VydmljZSB9IGZyb20gXCIuL292ZXJ2aWV3LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtb3ZlcnZpZXdcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIm92ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIm92ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJ2aWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9kdWN0czogQXJ0aWNsZVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVydmlld1NlcnZpY2U6IE92ZXJ2aWV3U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnN0cnVjdG9yIE92ZXJ2aWV3Q29tcG9uZW50IFwiKTtcclxuICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0QWxsUHJvZHVjdHNTZXJ2aWNlXCIpO1xyXG4gICAgICAgIHRoaXMub3ZlcnZpZXdTZXJ2aWNlLmdldEFsbFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoYWxsUHJvZHVjdHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9BZGQgPSBuZXcgQXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLmlkID0gYWxsUHJvZHVjdHNbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQubmFtZSA9IGFsbFByb2R1Y3RzW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9BZGQuZGVzY3JpcHRpb24gPSBhbGxQcm9kdWN0c1tpXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0b0FkZC5wcmljZSA9IGFsbFByb2R1Y3RzW2ldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvQWRkLmltYWdlID0gYWxsUHJvZHVjdHNbaV0uaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHRvQWRkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHRhcHBlZEFydGljbGUgPSB0aGlzLnByb2R1Y3RzW2FyZ3MuaW5kZXhdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcHBlZEFydGljbGUuaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYXJ0aWNsZS1kZXRhaWxcIiwgdGFwcGVkQXJ0aWNsZS5pZF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtVGFwcGVkOiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=