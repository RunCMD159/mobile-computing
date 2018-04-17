import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {SharedModule} from "../shared/shared.module";
import {ArticleDetailComponent} from "./article-detail.component";
import {routes} from "../app-routing.module";
import {NativeScriptRouterModule} from "nativescript-angular";
import {CommonActionbarModule} from "../common-actionbar/common-actionbar.module";
import {ArticleDetailService} from "./article-detail.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        CommonActionbarModule
    ],
    declarations: [
        ArticleDetailComponent
    ],
    providers: [ArticleDetailService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArticleDetailModule {
}
