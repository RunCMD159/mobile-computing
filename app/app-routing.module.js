"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
var new_article_component_1 = require("./new-article/new-article.component");
var overview_component_1 = require("./overview/overview.component");
var shopping_cart_component_1 = require("./shopping-cart/shopping-cart.component");
var article_detail_component_1 = require("./article-detail/article-detail.component");
exports.routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "new-article", component: new_article_component_1.NewArticleComponent },
    { path: "article-detail", component: article_detail_component_1.ArticleDetailComponent },
    { path: "overview", component: overview_component_1.OverviewComponent },
    { path: "shopping-cart", component: shopping_cart_component_1.ShoppingCartComponent },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXVEO0FBQ3ZELDZFQUF3RTtBQUN4RSxvRUFBZ0U7QUFDaEUsbUZBQThFO0FBQzlFLHNGQUFpRjtBQUVwRSxRQUFBLE1BQU0sR0FBVztJQUMxQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ25ELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUMxQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBQztJQUMzRCxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFDO0lBQ2hELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsK0NBQXFCLEVBQUM7Q0FDNUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtOZXdBcnRpY2xlQ29tcG9uZW50fSBmcm9tIFwiLi9uZXctYXJ0aWNsZS9uZXctYXJ0aWNsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPdmVydmlld0NvbXBvbmVudH0gZnJvbSBcIi4vb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2hvcHBpbmdDYXJ0Q29tcG9uZW50fSBmcm9tIFwiLi9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXJ0aWNsZURldGFpbENvbXBvbmVudH0gZnJvbSBcIi4vYXJ0aWNsZS1kZXRhaWwvYXJ0aWNsZS1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7cGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIn0sXHJcbiAgICB7cGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiBcIm5ldy1hcnRpY2xlXCIsIGNvbXBvbmVudDogTmV3QXJ0aWNsZUNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJhcnRpY2xlLWRldGFpbFwiLCBjb21wb25lbnQ6IEFydGljbGVEZXRhaWxDb21wb25lbnR9LFxyXG4gICAge3BhdGg6IFwib3ZlcnZpZXdcIiwgY29tcG9uZW50OiBPdmVydmlld0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogXCJzaG9wcGluZy1jYXJ0XCIsIGNvbXBvbmVudDogU2hvcHBpbmdDYXJ0Q29tcG9uZW50fSxcclxuXTtcclxuXHJcbiJdfQ==