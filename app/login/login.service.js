"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var backend_service_1 = require("../shared/backend/backend.service");
var LoginService = /** @class */ (function () {
    function LoginService(backendService) {
        this.backendService = backendService;
    }
    LoginService.prototype.login = function (user) {
        return this.backendService.post("/users/authenticate", {
            email: user.email,
            password: user.password
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [backend_service_1.BackendService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBSS9CLHFFQUFtRTtBQUduRTtJQUNJLHNCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXhELDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMzQixxQkFBcUIsRUFDckI7WUFDSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQ0o7YUFDQSxLQUFLLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWpCVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRTJCLGdDQUFjO09BRHpDLFlBQVksQ0FrQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9zaGFyZWQvdXNlcnMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYmFja2VuZC9iYWNrZW5kLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKSB7fVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYWNrZW5kU2VydmljZS5wb3N0KFxyXG4gICAgICAgIFwiL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgLmNhdGNoICh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKXtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn0iXX0=