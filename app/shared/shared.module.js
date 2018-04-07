"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var my_drawer_item_component_1 = require("./my-drawer-item/my-drawer-item.component");
var my_drawer_component_1 = require("./my-drawer/my-drawer.component");
var backend_service_1 = require("./backend/backend.service");
var local_storage_service_1 = require("./local-storage/local-storage.service");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_angular_1 = require("nativescript-angular");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_client_1.NativeScriptHttpClientModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                my_drawer_component_1.MyDrawerComponent,
                my_drawer_item_component_1.MyDrawerItemComponent
            ],
            exports: [
                my_drawer_component_1.MyDrawerComponent,
                angular_1.NativeScriptUISideDrawerModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            providers: [backend_service_1.BackendService, local_storage_service_1.LocalStorageService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQXFFO0FBQ3JFLGtFQUFzRjtBQUV0RixzRkFBZ0Y7QUFDaEYsdUVBQWtFO0FBQ2xFLDZEQUF5RDtBQUN6RCwrRUFBMEU7QUFDMUUsZ0VBQThFO0FBQzlFLDZEQUErRDtBQXVCL0Q7SUFBQTtJQUNBLENBQUM7SUFEWSxZQUFZO1FBckJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix3Q0FBOEI7Z0JBQzlCLDBDQUE0QjtnQkFDNUIsOENBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHVDQUFpQjtnQkFDakIsZ0RBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVDQUFpQjtnQkFDakIsd0NBQThCO2dCQUM5Qiw4Q0FBdUI7YUFDMUI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDJDQUFtQixDQUFDO1lBQ2hELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUN4QjtJQUFELG1CQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcblxyXG5pbXBvcnQge015RHJhd2VySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vbXktZHJhd2VyLWl0ZW0vbXktZHJhd2VyLWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TXlEcmF3ZXJDb21wb25lbnR9IGZyb20gXCIuL215LWRyYXdlci9teS1kcmF3ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuL2JhY2tlbmQvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTXlEcmF3ZXJDb21wb25lbnQsXHJcbiAgICAgICAgTXlEcmF3ZXJJdGVtQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE15RHJhd2VyQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0JhY2tlbmRTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG59XHJcbiJdfQ==