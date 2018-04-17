import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoggerService } from './core/logger/logger.service';
import { LoggerComponent } from './core/logger/logger.component';
import { HostComponent } from './shared/non-modal/host/host.component';
import { NonModalService } from './shared/non-modal/non-modal.service';
import { TestComponent } from './test-component/test.component';
import { WindowComponent } from './shared/non-modal/window/window.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { PhysicalListComponent } from './physicals/physical-list.component';
import { PhysicalCartComponent } from './physicals/physical-cart/physical-cart.component';
import { UserListComponent } from './users/user-list.component';
import { UserCartComponent } from './users/user-cart/user-cart.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductCartComponent } from './products/product-cart/product-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    WindowComponent,
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
    CoreModule
  ],
  providers: [
    NonModalService,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    TestComponent,
  ]
})
export class AppModule {
}
