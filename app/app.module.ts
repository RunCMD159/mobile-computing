import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from './login/login.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoginComponent } from './login/login.component';
import {NewArticleModule} from "./new-article/new-article.module";
import {OverviewModule} from "./overview/overview.module";
import {ArticleDetailModule} from "./article-detail/article-detail.module";
import {ShoppingCartModule} from "./shopping-cart/shopping-cart.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    entryComponents:[LoginComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        LoginModule,
        NewArticleModule,
        OverviewModule,
        ArticleDetailModule,
        ShoppingCartModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
