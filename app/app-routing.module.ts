import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { SearchComponent } from './search/search.component';
import { FeaturedComponent } from './featured/featured.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    // {path: "home", component: HomeComponent},
    // {path: "browse", component: BrowseComponent},
    // {path: "search", component: SearchComponent},
    // {path: "featured", component: FeaturedComponent},
    // {path: "settings", component: SettingsComponent}
];

