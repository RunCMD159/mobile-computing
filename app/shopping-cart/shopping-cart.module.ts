import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { ShoppingCartComponent } from "./shopping-cart.component";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonActionbarModule} from "../common-actionbar/common-actionbar.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        CommonActionbarModule
    ],
    declarations: [
        ShoppingCartComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ShoppingCartModule { }
