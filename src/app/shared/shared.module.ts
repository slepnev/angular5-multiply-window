import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonModalModule } from './non-modal/non-modal.module';
import { DraggableDirective } from './directives/draggable.directive';
import { DraggableHelper } from './directives/draggable-helper.provider';

@NgModule({
  imports: [
    CommonModule,
    NonModalModule
  ],
  declarations: [
    DraggableDirective
  ],
  exports: [
    NonModalModule,
    DraggableDirective
  ],
  providers: [
    DraggableHelper
  ]
})
export class SharedModule {
}
