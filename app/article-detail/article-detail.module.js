"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var article_detail_component_1 = require("./article-detail.component");
var app_routing_module_1 = require("../app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var common_actionbar_module_1 = require("../common-actionbar/common-actionbar.module");
var article_detail_service_1 = require("./article-detail.service");
var ArticleDetailModule = /** @class */ (function () {
    function ArticleDetailModule() {
    }
    ArticleDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes),
                common_actionbar_module_1.CommonActionbarModule
            ],
            declarations: [
                article_detail_component_1.ArticleDetailComponent
            ],
            providers: [article_detail_service_1.ArticleDetailService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ArticleDetailModule);
    return ArticleDetailModule;
}());
exports.ArticleDetailModule = ArticleDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUFxRTtBQUVyRSx5REFBcUQ7QUFDckQsdUVBQWtFO0FBQ2xFLDREQUE2QztBQUM3Qyw2REFBOEQ7QUFDOUQsdUZBQWtGO0FBQ2xGLG1FQUE4RDtBQWtCOUQ7SUFBQTtJQUNBLENBQUM7SUFEWSxtQkFBbUI7UUFoQi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFNLENBQUM7Z0JBQ3hDLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixpREFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztZQUNqQyxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUMvQjtJQUFELDBCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHtBcnRpY2xlRGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9hcnRpY2xlLWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtyb3V0ZXN9IGZyb20gXCIuLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge0NvbW1vbkFjdGlvbmJhck1vZHVsZX0gZnJvbSBcIi4uL2NvbW1vbi1hY3Rpb25iYXIvY29tbW9uLWFjdGlvbmJhci5tb2R1bGVcIjtcclxuaW1wb3J0IHtBcnRpY2xlRGV0YWlsU2VydmljZX0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgICAgIENvbW1vbkFjdGlvbmJhck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFydGljbGVEZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtBcnRpY2xlRGV0YWlsU2VydmljZV0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZURldGFpbE1vZHVsZSB7XHJcbn1cclxuIl19