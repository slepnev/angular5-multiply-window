import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonModalModule } from './non-modal/non-modal.module';

@NgModule({
  imports: [
    CommonModule,
    NonModalModule
  ],
  declarations: [],
  exports: [
    NonModalModule
  ],
  providers: []
})
export class SharedModule {
}
