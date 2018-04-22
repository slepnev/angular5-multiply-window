import { Component, OnDestroy, OnInit } from '@angular/core';
import { NonModalService } from '../non-modal.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-window-list',
  templateUrl: './window-list.component.html',
  styleUrls: ['./window-list.component.scss']
})
export class WindowListComponent implements OnInit, OnDestroy {
  public collection;
  public subscription: Subscription;

  constructor(public nonModalService: NonModalService) {
    this.subscription = this.nonModalService.changeCollection.subscribe(collection => {
      this.collection = collection;
    });
  }

  ngOnInit() {
  }

  onClose(item) {
    this.nonModalService.unregisterWindow(item.factory);
  }

  onChange(item) {
    if (item.active) {
      if (item.hide) {
        this.nonModalService.activeWindow(item.factory);
      } else {
        this.nonModalService.hideWindow(item.factory);
      }
    } else {
      this.nonModalService.activeWindow(item.factory);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
