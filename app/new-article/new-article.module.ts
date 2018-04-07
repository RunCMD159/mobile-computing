import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { NewArticleComponent } from "./new-article.component";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        NewArticleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewArticleModule { }
