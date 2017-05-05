"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var AddProductComponent = (function () {
    function AddProductComponent(router, addProdcutService, alertService) {
        this.router = router;
        this.addProdcutService = addProdcutService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    AddProductComponent.prototype.addproduct = function () {
        var _this = this;
        this.loading = true;
        this.addProdcutService.addProduct(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Prodcut has been added successful', true);
            _this.router.navigate(['/listProducts']);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'add.product.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AddProductService,
        index_1.AlertService])
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=add.product.component.js.map