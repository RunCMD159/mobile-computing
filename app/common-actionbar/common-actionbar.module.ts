import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonActionbarComponent} from "./common-actionbar.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [CommonActionbarComponent],
    exports:[CommonActionbarComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CommonActionbarModule {
}
