import {Routes} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {NewArticleComponent} from "./new-article/new-article.component";
import {OverviewComponent} from "./overview/overview.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "new-article", component: NewArticleComponent},
    {path: "article-detail", component: ArticleDetailComponent},
    {path: "overview", component: OverviewComponent},
    {path: "shopping-cart", component: ShoppingCartComponent},
];

