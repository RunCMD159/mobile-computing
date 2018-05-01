"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var new_article_component_1 = require("./new-article.component");
var app_routing_module_1 = require("../app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var common_actionbar_module_1 = require("../common-actionbar/common-actionbar.module");
var new_article_service_1 = require("./new-article.service");
var NewArticleModule = /** @class */ (function () {
    function NewArticleModule() {
    }
    NewArticleModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes),
                common_actionbar_module_1.CommonActionbarModule
            ],
            declarations: [
                new_article_component_1.NewArticleComponent
            ],
            providers: [new_article_service_1.NewArticleService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NewArticleModule);
    return NewArticleModule;
}());
exports.NewArticleModule = NewArticleModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFydGljbGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LWFydGljbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUFxRTtBQUVyRSx5REFBcUQ7QUFDckQsaUVBQTREO0FBQzVELDREQUE2QztBQUM3Qyw2REFBOEQ7QUFDOUQsdUZBQWtGO0FBQ2xGLDZEQUF3RDtBQWtCeEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFoQjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFNLENBQUM7Z0JBQ3hDLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDViwyQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHtOZXdBcnRpY2xlQ29tcG9uZW50fSBmcm9tIFwiLi9uZXctYXJ0aWNsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtyb3V0ZXN9IGZyb20gXCIuLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0NvbW1vbkFjdGlvbmJhck1vZHVsZX0gZnJvbSBcIi4uL2NvbW1vbi1hY3Rpb25iYXIvY29tbW9uLWFjdGlvbmJhci5tb2R1bGVcIjtcclxuaW1wb3J0IHtOZXdBcnRpY2xlU2VydmljZX0gZnJvbSBcIi4vbmV3LWFydGljbGUuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgICAgIENvbW1vbkFjdGlvbmJhck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIE5ld0FydGljbGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtOZXdBcnRpY2xlU2VydmljZV0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV3QXJ0aWNsZU1vZHVsZSB7XHJcbn1cclxuIl19