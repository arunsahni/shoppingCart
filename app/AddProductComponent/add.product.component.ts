import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AddProductService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add.product.component.html'
})

export class AddProductComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private addProdcutService: AddProductService,
        private alertService: AlertService) { }

    addproduct() {
        this.loading = true;
        this.addProdcutService.addProduct(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Prodcut has been added successful', true);
                    this.router.navigate(['/listProducts']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
