import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {NewArticleComponent} from "./new-article.component";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonActionbarModule} from "../common-actionbar/common-actionbar.module";
import {NewArticleService} from "./new-article.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        CommonActionbarModule
    ],
    declarations: [
        NewArticleComponent
    ],
    providers: [NewArticleService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewArticleModule {
}
