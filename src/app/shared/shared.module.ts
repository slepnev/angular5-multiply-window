import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './non-modal/host/host.component';
import { WindowComponent } from './non-modal/window/window.component';
import { NonModalService } from './non-modal/non-modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HostComponent,
    WindowComponent,
  ],
  exports: [
    HostComponent,
    WindowComponent,
  ],
  providers: [
    NonModalService,
  ]
})
export class SharedModule {
}
