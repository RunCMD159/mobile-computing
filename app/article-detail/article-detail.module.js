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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUFxRTtBQUVyRSx5REFBcUQ7QUFDckQsdUVBQWtFO0FBQ2xFLDREQUE2QztBQUM3Qyw2REFBOEQ7QUFDOUQsdUZBQWtGO0FBQ2xGLG1FQUE4RDtBQWtCOUQ7SUFBQTtJQUNBLENBQUM7SUFEWSxtQkFBbUI7UUFoQi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFNLENBQUM7Z0JBQ3hDLCtDQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVixpREFBc0I7YUFDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztZQUNqQyxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLG1CQUFtQixDQUMvQjtJQUFELDBCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcbmltcG9ydCB7QXJ0aWNsZURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge3JvdXRlc30gZnJvbSBcIi4uL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtDb21tb25BY3Rpb25iYXJNb2R1bGV9IGZyb20gXCIuLi9jb21tb24tYWN0aW9uYmFyL2NvbW1vbi1hY3Rpb25iYXIubW9kdWxlXCI7XG5pbXBvcnQge0FydGljbGVEZXRhaWxTZXJ2aWNlfSBmcm9tIFwiLi9hcnRpY2xlLWRldGFpbC5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgICAgICBDb21tb25BY3Rpb25iYXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcnRpY2xlRGV0YWlsQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcnRpY2xlRGV0YWlsU2VydmljZV0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsTW9kdWxlIHtcbn1cbiJdfQ==