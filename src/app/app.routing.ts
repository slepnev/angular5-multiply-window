import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './users/user-list.component';
import { PhysicalListComponent } from './physicals/physical-list.component';
import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'physical/list', component: PhysicalListComponent },
  { path: 'product/list', component: ProductListComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
