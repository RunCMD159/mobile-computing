import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";

import {MyDrawerItemComponent} from "./my-drawer-item/my-drawer-item.component";
import {MyDrawerComponent} from "./my-drawer/my-drawer.component";
import {BackendService} from "./backend/backend.service";
import {LocalStorageService} from "./local-storage/local-storage.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule
    ],
    providers: [BackendService, LocalStorageService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
