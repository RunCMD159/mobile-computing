import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { NewArticleComponent } from "./new-article.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule
    ],
    declarations: [
        NewArticleComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewArticleModule { }
