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
        return this._http.post(this.buildPath(path), body, { headers: this.getCommonHeaders() });
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
    BackendService.prototype.getCommonHeaders = function () {
        var headers = new http_1.HttpHeaders();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCwyQ0FBMEM7QUFJMUM7SUFFSSx3QkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDRCQUFHLEdBQVYsVUFBVyxJQUFZO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksNEJBQUcsR0FBVixVQUFXLElBQVksRUFBRSxJQUFTO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDZCQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBUztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsRUFBTztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sa0NBQVMsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixNQUFNLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVPLHlDQUFnQixHQUF4QjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXJEUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2tCLGlCQUFVO09BRjVCLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCByZXNvdXJjZSB3aXRoIG1ldGhvZCBHRVRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXHJcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuYnVpbGRQYXRoKHBhdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgUFVUIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHB1dChwYXRoOiBzdHJpbmcsIGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuYnVpbGRQYXRoKHBhdGgpLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgUE9TVCByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwb3N0KHBhdGg6IHN0cmluZywgYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuYnVpbGRQYXRoKHBhdGgpLCBib2R5LCB7aGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCl9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERFTEVURSByZXNvdXJjZSBmcm9tIHNlcnZlciBieSBpZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcclxuICAgICAqIEBwYXJhbSB7YW55fSBpZFxyXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZShwYXRoOiBzdHJpbmcsIGlkOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSh0aGlzLmJ1aWxkUGF0aChwYXRoKSArIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDb25maWcuYXBpVXJsICsgcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbW1vbkhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcbn0iXX0=