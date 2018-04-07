"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var article_detail_component_1 = require("./article-detail.component");
var app_routing_module_1 = require("../app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var ArticleDetailModule = /** @class */ (function () {
    function ArticleDetailModule() {
    }
    ArticleDetailModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXJ0aWNsZS1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELHNEQUFxRTtBQUVyRSx5REFBcUQ7QUFDckQsdUVBQWtFO0FBQ2xFLDREQUE2QztBQUM3Qyw2REFBOEQ7QUFnQjlEO0lBQUE7SUFDQSxDQUFDO0lBRFksbUJBQW1CO1FBZC9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFNLENBQUM7YUFDM0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsaURBQXNCO2FBQ3pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBLEFBREQsSUFDQztBQURZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7QXJ0aWNsZURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7cm91dGVzfSBmcm9tIFwiLi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFydGljbGVEZXRhaWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXJ0aWNsZURldGFpbE1vZHVsZSB7XHJcbn1cclxuIl19