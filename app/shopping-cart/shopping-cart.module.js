"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("../shared/shared.module");
var shopping_cart_component_1 = require("./shopping-cart.component");
var app_routing_module_1 = require("../app-routing.module");
var nativescript_angular_1 = require("nativescript-angular");
var ShoppingCartModule = /** @class */ (function () {
    function ShoppingCartModule() {
    }
    ShoppingCartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(app_routing_module_1.routes)
            ],
            declarations: [
                shopping_cart_component_1.ShoppingCartComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ShoppingCartModule);
    return ShoppingCartModule;
}());
exports.ShoppingCartModule = ShoppingCartModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG9wcGluZy1jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELHFFQUFrRTtBQUNsRSw0REFBNkM7QUFDN0MsNkRBQThEO0FBZ0I5RDtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBZDlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFNLENBQUM7YUFDM0M7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsK0NBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vc2hvcHBpbmctY2FydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtyb3V0ZXN9IGZyb20gXCIuLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgU2hvcHBpbmdDYXJ0Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQ2FydE1vZHVsZSB7IH1cclxuIl19