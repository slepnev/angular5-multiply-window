import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NonModalService} from './non-modal.service';
import { LinkComponent } from './link/link.component';
import { WindowComponent } from './window/window.component';
import { HostComponent } from './host/host.component';
import { DraggableDirective } from '../directives/draggable.directive';
import { WindowListComponent } from './window-list/window-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HostComponent,
    WindowComponent,
    LinkComponent,
    DraggableDirective,
    WindowListComponent
  ],
  exports: [
    HostComponent,
    WindowComponent,
    LinkComponent,
    DraggableDirective,
    WindowListComponent
  ],
  providers: [
    NonModalService,
  ]
})
export class NonModalModule {

}
