import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {AddProductComponent} from './AddProductComponent/index';
import {EditProductComponent} from './AddProductComponent/edit-index';
import {ListProductComponent} from './AddProductComponent/list-index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addProducts', component: AddProductComponent},
    { path: 'editProduct/:id', component: EditProductComponent},
    {path: 'listProducts', component:ListProductComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);