import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-loger',
  templateUrl: './logger.component.html',
  styleUrls: [
    './logger.component.scss'
  ]
})
export class LoggerComponent implements OnInit, OnDestroy {

  public messages: Array<string> = [];
  private subscription: Subscription;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.subscription = this.logger.log
      .subscribe(message => this.messages.push(message));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
