"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_1 = require("../config/config");
var BackendService = /** @class */ (function () {
    function BackendService(_http) {
        this._http = _http;
    }
    /**
     * Request resource with method GET
     * @param {string} path
     * @returns {Observable<any>}
     */
    BackendService.prototype.get = function (path) {
        return this._http.get(this.buildPath(path));
    };
    /**
     * Send PUT request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    BackendService.prototype.put = function (path, body) {
        return this._http.put(this.buildPath(path), body);
    };
    /**
     * Send POST request
     * @param {string} path
     * @param body
     * @returns {Observable<any>}
     */
    BackendService.prototype.post = function (path, body) {
        return this._http.post(this.buildPath(path), body);
    };
    /**
     * DELETE resource from server by id
     * @param {string} path
     * @param {any} id
     * @returns {Observable<any>}
     */
    BackendService.prototype.delete = function (path, id) {
        return this._http.delete(this.buildPath(path) + id);
    };
    BackendService.prototype.buildPath = function (path) {
        return config_1.Config.apiUrl + path;
    };
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDZDQUFnRDtBQUVoRCwyQ0FBd0M7QUFHeEM7SUFFSSx3QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDRCQUFHLEdBQVYsVUFBVyxJQUFZO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksNEJBQUcsR0FBVixVQUFXLElBQVksRUFBRSxJQUFTO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDZCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBUztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwrQkFBTSxHQUFiLFVBQWMsSUFBWSxFQUFFLEVBQU87UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVPLGtDQUFTLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUE5Q1EsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdrQixpQkFBVTtPQUY1QixjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IHJlc291cmNlIHdpdGggbWV0aG9kIEdFVFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcclxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQocGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5idWlsZFBhdGgocGF0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBQVVQgcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHV0KHBhdGg6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5idWlsZFBhdGgocGF0aCksIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBQT1NUIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBvc3QocGF0aDogc3RyaW5nLCBib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5idWlsZFBhdGgocGF0aCksIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogREVMRVRFIHJlc291cmNlIGZyb20gc2VydmVyIGJ5IGlkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxyXG4gICAgICogQHBhcmFtIHthbnl9IGlkXHJcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKHBhdGg6IHN0cmluZywgaWQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuYnVpbGRQYXRoKHBhdGgpICsgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENvbmZpZy5hcGlVcmwgKyBwYXRoO1xyXG4gICAgfVxyXG59Il19