"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
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
            exports: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQXFFO0FBQ3JFLGtFQUFzRjtBQUV0Riw2REFBeUQ7QUFDekQsK0VBQTBFO0FBQzFFLGdFQUE4RTtBQUM5RSw2REFBK0Q7QUFrQi9EO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQWhCeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsd0NBQThCO2dCQUM5QiwwQ0FBNEI7Z0JBQzVCLDhDQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBOEI7Z0JBQzlCLDhDQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsMkNBQW1CLENBQUM7WUFDaEQsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuL2JhY2tlbmQvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0JhY2tlbmRTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xyXG59XHJcbiJdfQ==