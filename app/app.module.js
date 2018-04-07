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
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes),
                login_module_1.LoginModule,
                new_article_module_1.NewArticleModule,
                overview_module_1.OverviewModule,
                article_detail_module_1.ArticleDetailModule,
                shopping_cart_module_1.ShoppingCartModule
            ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUE4QztBQUM5QyxpREFBK0M7QUFDL0MscURBQW1EO0FBQ25ELHNEQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQsdUVBQWtFO0FBQ2xFLDhEQUEwRDtBQUMxRCxnRkFBMkU7QUFDM0UsNkVBQXdFO0FBd0J4RTtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsZUFBZSxFQUFDLENBQUMsZ0NBQWMsQ0FBQztZQUNoQyxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQywyQkFBTSxDQUFDO2dCQUN4QywwQkFBVztnQkFDWCxxQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIseUNBQWtCO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge05ld0FydGljbGVNb2R1bGV9IGZyb20gXCIuL25ldy1hcnRpY2xlL25ldy1hcnRpY2xlLm1vZHVsZVwiO1xyXG5pbXBvcnQge092ZXJ2aWV3TW9kdWxlfSBmcm9tIFwiLi9vdmVydmlldy9vdmVydmlldy5tb2R1bGVcIjtcclxuaW1wb3J0IHtBcnRpY2xlRGV0YWlsTW9kdWxlfSBmcm9tIFwiLi9hcnRpY2xlLWRldGFpbC9hcnRpY2xlLWRldGFpbC5tb2R1bGVcIjtcclxuaW1wb3J0IHtTaG9wcGluZ0NhcnRNb2R1bGV9IGZyb20gXCIuL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6W0xvZ2luQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICAgICAgTG9naW5Nb2R1bGUsXHJcbiAgICAgICAgTmV3QXJ0aWNsZU1vZHVsZSxcclxuICAgICAgICBPdmVydmlld01vZHVsZSxcclxuICAgICAgICBBcnRpY2xlRGV0YWlsTW9kdWxlLFxyXG4gICAgICAgIFNob3BwaW5nQ2FydE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG59XHJcbiJdfQ==