"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var article_detail_component_1 = require("./article-detail.component");
var app_routing_module_1 = require("../app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var common_actionbar_module_1 = require("../common-actionbar/common-actionbar.module");
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
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ArticleDetailModule);
    return ArticleDetailModule;
}());
exports.ArticleDetailModule = ArticleDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUFxRTtBQUVyRSx5REFBcUQ7QUFDckQsdUVBQWtFO0FBQ2xFLDREQUE2QztBQUM3Qyw2REFBOEQ7QUFDOUQsdUZBQWtGO0FBaUJsRjtJQUFBO0lBQ0EsQ0FBQztJQURZLG1CQUFtQjtRQWYvQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw0QkFBWTtnQkFDWiwrQ0FBd0I7Z0JBQ3hCLCtDQUF3QixDQUFDLE9BQU8sQ0FBQywyQkFBTSxDQUFDO2dCQUN4QywrQ0FBcUI7YUFDeEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaURBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7QXJ0aWNsZURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7cm91dGVzfSBmcm9tIFwiLi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtDb21tb25BY3Rpb25iYXJNb2R1bGV9IGZyb20gXCIuLi9jb21tb24tYWN0aW9uYmFyL2NvbW1vbi1hY3Rpb25iYXIubW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICAgICAgQ29tbW9uQWN0aW9uYmFyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXJ0aWNsZURldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlRGV0YWlsTW9kdWxlIHtcclxufVxyXG4iXX0=