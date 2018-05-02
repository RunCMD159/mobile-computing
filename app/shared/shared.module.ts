import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { BackendService } from "./backend/backend.service";
import { LocalStorageService } from "./local-storage/local-storage.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular";
import { ShoppingCartService } from './cart/shopping-cart.service';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    exports: [
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    providers: [BackendService, LocalStorageService, ShoppingCartService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {
}
