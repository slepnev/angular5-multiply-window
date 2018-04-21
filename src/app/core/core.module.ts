import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoggerComponent } from './logger/logger.component';
import { LoggerService } from './logger/logger.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, LoggerComponent],
  exports: [MenuComponent, LoggerComponent],
  providers: [LoggerService]
})
export class CoreModule { }
