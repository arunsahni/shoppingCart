﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/listProducts';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("Hi",data)
                    if(data == true){
                        this.router.navigate([this.returnUrl]);
                    } else{
                        this.alertService.error("Invalid Username/Password");
                        this.loading = false;
                    }
                    
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
