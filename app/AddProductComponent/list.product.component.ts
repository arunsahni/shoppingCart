import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AddProductService } from '../_services/index';
import { Product } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'list.product.component.html'
})

export class ListProductComponent {
    //model: any = {};
    product: any[];
    loading = false;

    constructor(
        private router: Router,
        private addProdcutService: AddProductService,
        private alertService: AlertService) { }

    ngOnInit() {
       this.listProduct();
    }

    listProduct() {
        
        this.loading = true;
        this.addProdcutService.ListProduct()
            .subscribe(
                data => {
                    console.log("Hi i am intialized",data.data);
                    this.product = data.data;
                    this.alertService.success('Prodcut has listed', true);
                    //this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
    
    viewDetails(product: Product){
        this.router.navigate(['editProduct/:id', product._id])
    }
}
