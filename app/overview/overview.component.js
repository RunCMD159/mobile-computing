"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var overview_service_1 = require("./overview.service");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(overviewService) {
        this.overviewService = overviewService;
        this.products = [];
        this.getAllProducts();
    }
    OverviewComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.overviewService.getAllProducts()
            .subscribe(function (allProducts) {
            _this.products = allProducts;
        });
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: "ns-overview",
            templateUrl: "overview/overview.component.html",
            styleUrls: ["overview/overview.component.css"]
        }),
        __metadata("design:paramtypes", [overview_service_1.OverviewService])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBRXhDLHVEQUFtRDtBQVFuRDtJQUlJLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFGcEQsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUdyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNoQyxTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQWJRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUVqRCxDQUFDO3lDQUt1QyxrQ0FBZTtPQUozQyxpQkFBaUIsQ0FlN0I7SUFBRCx3QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FydGljbGV9IGZyb20gXCIuLi9zaGFyZWQvYXJ0aWNsZS9hcnRpY2xlLm1vZGVsXCI7XHJcbmltcG9ydCB7T3ZlcnZpZXdTZXJ2aWNlfSBmcm9tIFwiLi9vdmVydmlldy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW92ZXJ2aWV3XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJvdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdDb21wb25lbnQge1xyXG5cclxuICAgIHByb2R1Y3RzOiBBcnRpY2xlW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJ2aWV3U2VydmljZTogT3ZlcnZpZXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxQcm9kdWN0cygpIHtcclxuICAgICAgICB0aGlzLm92ZXJ2aWV3U2VydmljZS5nZXRBbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGFsbFByb2R1Y3RzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gYWxsUHJvZHVjdHM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=