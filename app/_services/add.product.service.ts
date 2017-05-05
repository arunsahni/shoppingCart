import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { Product } from '../_models/index';

@Injectable()
export class AddProductService {
    constructor(private http: Http,  private config: AppConfig) {       
     
    }
   
    // private helper methods

    //Api calling for adding products:
     addProduct(product: Product) {
        console.log("i am running");
        return this.http.post(this.config.apiUrl + '/addproduct', product).map((response: Response) => response.json());
    }

    ListProduct(){
     return this.http.get(this.config.apiUrl + '/listAllproducts').map((response: Response) => response.json());
    }

      private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}