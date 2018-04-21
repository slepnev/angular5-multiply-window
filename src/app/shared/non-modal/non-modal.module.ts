import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NonModalService} from './non-modal.service';
import { LinkComponent } from './link/link.component';
import { WindowComponent } from './window/window.component';
import { HostComponent } from './host/host.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HostComponent,
    WindowComponent,
    LinkComponent
  ],
  exports: [
    HostComponent,
    WindowComponent,
    LinkComponent
  ],
  providers: [
    NonModalService,
  ]
})
export class NonModalModule {

}
