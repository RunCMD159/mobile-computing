import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {OverviewComponent} from "./overview.component";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonActionbarModule} from "../common-actionbar/common-actionbar.module";
import {OverviewService} from "./overview.service";
import * as LabelModule from "tns-core-modules/ui/label";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        CommonActionbarModule
    ],
    declarations: [
        OverviewComponent
    ],
    providers: [OverviewService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OverviewModule {
}
