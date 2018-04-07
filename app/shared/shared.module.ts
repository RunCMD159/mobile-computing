import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptUISideDrawerModule} from "nativescript-pro-ui/sidedrawer/angular";

import {MyDrawerItemComponent} from "./my-drawer-item/my-drawer-item.component";
import {MyDrawerComponent} from "./my-drawer/my-drawer.component";
import {BackendService} from "./backend/backend.service";
import {LocalStorageService} from "./local-storage/local-storage.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MyDrawerComponent,
        MyDrawerItemComponent
    ],
    exports: [
        MyDrawerComponent,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    providers: [BackendService, LocalStorageService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
