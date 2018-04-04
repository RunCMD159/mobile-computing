import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from './login/login.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

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
