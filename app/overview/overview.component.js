"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var article_model_1 = require("../shared/article/article.model");
var overview_service_1 = require("./overview.service");
var core_1 = require("@angular/core");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewService) {
        this.overviewService = overviewService;
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
                var toAdd = new article_model_1.Article(allProducts[i].name, allProducts[i].description, allProducts[i].price, allProducts[i].image);
                _this.products.push(toAdd);
            }
            console.log(JSON.stringify(_this.products));
        });
    };
    OverviewComponent.prototype.onItemTap = function (args) {
        console.log("------------------------- ItemTapped: " + args.index);
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "overview/overview.component.html",
            styleUrls: ["overview/overview.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [overview_service_1.OverviewService])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQXdEO0FBQ3hELHVEQUFtRDtBQUNuRCxzQ0FBd0U7QUFXeEU7SUFHSSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRHBELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFHekIsQ0FBQztJQUNELG9DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUFBLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLFdBQVc7WUFDbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzFDLElBQUksS0FBSyxHQUFHLElBQUksdUJBQU8sQ0FDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDbkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDMUIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLHFDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQTVCUSxpQkFBaUI7UUFSN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FHbEQsQ0FBQzt5Q0FJdUMsa0NBQWU7T0FIM0MsaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnRpY2xlfSBmcm9tIFwiLi4vc2hhcmVkL2FydGljbGUvYXJ0aWNsZS5tb2RlbFwiO1xyXG5pbXBvcnQge092ZXJ2aWV3U2VydmljZX0gZnJvbSBcIi4vb3ZlcnZpZXcuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW92ZXJ2aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxuXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdDb21wb25lbnQge1xyXG5cclxuICAgIHByb2R1Y3RzOiBBcnRpY2xlW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcnZpZXdTZXJ2aWNlOiBPdmVydmlld1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29uc3RydWN0b3IgT3ZlcnZpZXdDb21wb25lbnQgXCIpOyBcclxuICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFsbFByb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2V0QWxsUHJvZHVjdHNTZXJ2aWNlXCIpOyAgXHJcbiAgICAgICAgdGhpcy5vdmVydmlld1NlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChhbGxQcm9kdWN0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0FkZCA9IG5ldyBBcnRpY2xlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9kdWN0c1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9kdWN0c1tpXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvZHVjdHNbaV0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb2R1Y3RzW2ldLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2godG9BZGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtVGFwcGVkOiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=