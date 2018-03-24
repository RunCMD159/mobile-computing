"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("nativescript-localstorage");
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * Store value per key in localstorage
     * @param {string} key
     * @param value
     */
    LocalStorageService.prototype.setItem = function (key, value) {
        return localStorage.setItem(key, value);
    };
    /**
     * Method returns value to provided key
     * @param {string} key
     * @returns {any}
     */
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService = __decorate([
        core_1.Injectable()
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBR3JDO0lBQUE7SUFtQkEsQ0FBQztJQWpCRzs7OztPQUlHO0lBQ0kscUNBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFVO1FBQ2xDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFDQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFsQlEsbUJBQW1CO1FBRC9CLGlCQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0FtQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmUgdmFsdWUgcGVyIGtleSBpbiBsb2NhbHN0b3JhZ2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ldGhvZCByZXR1cm5zIHZhbHVlIHRvIHByb3ZpZGVkIGtleVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICogQHJldHVybnMge2FueX1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXHJcbiAgICB9XHJcbn0iXX0=