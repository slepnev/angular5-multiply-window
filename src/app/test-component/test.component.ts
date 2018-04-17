import {AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../core/logger/logger.service';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  @Input('welcome') public welcome = 'Hello, World!';

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log.emit('OnInit hook');
  }

  ngOnDestroy() {
    this.logger.log.emit('OnDestroy hook');
  }

  ngAfterViewInit() {
    this.logger.log.emit('AfterViewInit hook');
  }

  ngAfterContentInit() {
    this.logger.log.emit('AfterContentInit hook');
  }

}
