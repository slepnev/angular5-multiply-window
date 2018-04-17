import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test-component/test.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { PhysicalListComponent } from './physicals/physical-list.component';
import { PhysicalCartComponent } from './physicals/physical-cart/physical-cart.component';
import { UserListComponent } from './users/user-list.component';
import { UserCartComponent } from './users/user-cart/user-cart.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductCartComponent } from './products/product-cart/product-cart.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    PhysicalListComponent,
    PhysicalCartComponent,
    UserListComponent,
    UserCartComponent,
    ProductListComponent,
    ProductCartComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    TestComponent,
  ]
})
export class AppModule {
}
