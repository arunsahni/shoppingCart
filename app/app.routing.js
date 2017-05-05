"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var index_5 = require("./AddProductComponent/index");
var edit_index_1 = require("./AddProductComponent/edit-index");
var list_index_1 = require("./AddProductComponent/list-index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'addProducts', component: index_5.AddProductComponent },
    { path: 'editProduct/:id', component: edit_index_1.EditProductComponent },
    { path: 'listProducts', component: list_index_1.ListProductComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map