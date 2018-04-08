"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_module_1 = require("./login/login.module");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var new_article_module_1 = require("./new-article/new-article.module");
var overview_module_1 = require("./overview/overview.module");
var article_detail_module_1 = require("./article-detail/article-detail.module");
var shopping_cart_module_1 = require("./shopping-cart/shopping-cart.module");
var common_actionbar_module_1 = require("./common-actionbar/common-actionbar.module");
var common_1 = require("nativescript-angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            entryComponents: [login_component_1.LoginComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes),
                login_module_1.LoginModule,
                new_article_module_1.NewArticleModule,
                overview_module_1.OverviewModule,
                article_detail_module_1.ArticleDetailModule,
                shopping_cart_module_1.ShoppingCartModule,
                common_actionbar_module_1.CommonActionbarModule
            ],
            exports: [common_actionbar_module_1.CommonActionbarModule, common_1.NativeScriptCommonModule],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLDJEQUE0QztBQUM1QyxpREFBNkM7QUFDN0MscURBQWlEO0FBQ2pELHNEQUFxRTtBQUNyRSwyREFBdUQ7QUFDdkQsdUVBQWtFO0FBQ2xFLDhEQUEwRDtBQUMxRCxnRkFBMkU7QUFDM0UsNkVBQXdFO0FBQ3hFLHNGQUFpRjtBQUNqRixzREFBcUU7QUEyQnJFO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQXpCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxlQUFlLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQ2pDLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsMkJBQU0sQ0FBQztnQkFDeEMsMEJBQVc7Z0JBQ1gscUNBQWdCO2dCQUNoQixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLHlDQUFrQjtnQkFDbEIsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFLENBQUMsK0NBQXFCLEVBQUUsaUNBQXdCLENBQUM7WUFDMUQsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TG9naW5Nb2R1bGV9IGZyb20gJy4vbG9naW4vbG9naW4ubW9kdWxlJztcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtOZXdBcnRpY2xlTW9kdWxlfSBmcm9tIFwiLi9uZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5tb2R1bGVcIjtcclxuaW1wb3J0IHtPdmVydmlld01vZHVsZX0gZnJvbSBcIi4vb3ZlcnZpZXcvb3ZlcnZpZXcubW9kdWxlXCI7XHJcbmltcG9ydCB7QXJ0aWNsZURldGFpbE1vZHVsZX0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwubW9kdWxlXCI7XHJcbmltcG9ydCB7U2hvcHBpbmdDYXJ0TW9kdWxlfSBmcm9tIFwiLi9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQubW9kdWxlXCI7XHJcbmltcG9ydCB7Q29tbW9uQWN0aW9uYmFyTW9kdWxlfSBmcm9tIFwiLi9jb21tb24tYWN0aW9uYmFyL2NvbW1vbi1hY3Rpb25iYXIubW9kdWxlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbTG9naW5Db21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICAgICAgTG9naW5Nb2R1bGUsXHJcbiAgICAgICAgTmV3QXJ0aWNsZU1vZHVsZSxcclxuICAgICAgICBPdmVydmlld01vZHVsZSxcclxuICAgICAgICBBcnRpY2xlRGV0YWlsTW9kdWxlLFxyXG4gICAgICAgIFNob3BwaW5nQ2FydE1vZHVsZSxcclxuICAgICAgICBDb21tb25BY3Rpb25iYXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbQ29tbW9uQWN0aW9uYmFyTW9kdWxlLCBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn1cclxuIl19