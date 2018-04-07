import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { OverviewComponent } from "./overview.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule
    ],
    declarations: [
        OverviewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
