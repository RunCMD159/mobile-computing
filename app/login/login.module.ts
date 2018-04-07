import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { UserService } from "../shared/users/user.service";
import {NativeScriptRouterModule, NativeScriptFormsModule} from "nativescript-angular";
import {routes} from "../app-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers:[UserService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
