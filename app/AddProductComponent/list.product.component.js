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
var ListProductComponent = (function () {
    function ListProductComponent(router, addProdcutService, alertService) {
        this.router = router;
        this.addProdcutService = addProdcutService;
        this.alertService = alertService;
        this.loading = false;
    }
    ListProductComponent.prototype.ngOnInit = function () {
        this.listProduct();
    };
    ListProductComponent.prototype.listProduct = function () {
        var _this = this;
        this.loading = true;
        this.addProdcutService.ListProduct()
            .subscribe(function (data) {
            console.log("Hi i am intialized", data.data);
            _this.product = data.data;
            _this.alertService.success('Prodcut has listed', true);
            //this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    ListProductComponent.prototype.viewDetails = function (product) {
        this.router.navigate(['editProduct/:id', product._id]);
    };
    return ListProductComponent;
}());
ListProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'list.product.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AddProductService,
        index_1.AlertService])
], ListProductComponent);
exports.ListProductComponent = ListProductComponent;
//# sourceMappingURL=list.product.component.js.map