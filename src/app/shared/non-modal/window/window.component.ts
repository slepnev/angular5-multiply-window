import { Component, ComponentFactory, ComponentRef, HostBinding, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NonModalService } from '../non-modal.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-non-modal-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {

  @ViewChild('componentContainer', {read: ViewContainerRef}) private container;

  @Input('data')
  public set data({factory: factory, id: id, options: options, hide: hide, active: active}) {
    this.factory = factory;
    this.options = options;
    this.hide = hide;
    this.active = active;
    this.id = id;
    this.caption = (options && options['caption']) ? options['caption'] : null;
  }

  public factory: ComponentFactory<any>;
  public options;
  public hide;
  public active;
  public id;
  public caption;
  public subscription: Subscription;
  public body;
  public draggable = true;

  public componentRef: ComponentRef<any>;

  constructor(private nonModalService: NonModalService) {
    this.body = document.body;
    this.subscription = this.nonModalService.changeCollection.subscribe(collection => {
      collection.forEach(item => {
        if (item.factory === this.factory) {
          this.data = item;
        }
      });
    });
  }

  ngOnInit() {
    /*
     * Create new component from factory and
     * registering itself
     */
    this.container.clear();
    this.componentRef = this.container.createComponent(this.factory);

    if (this.options) {
      const keys = Object.keys(this.options);

      for (let i = 0; i < keys.length; i++) {
        this.componentRef.instance[keys[i]] = this.options[keys[i]];
      }
    }

    this.nonModalService.registerWindow(this);
  }

  onClose() {
    /*
     * Trigger unregister on close
     */
    this.nonModalService.unregisterWindow(this.factory);
  }

  onHide() {
    /*
     * Trigger unregister on close
     */
    this.nonModalService.hideWindow(this.factory);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onMouseDown(event: MouseEvent | TouchEvent) {
    if (event.target && event.target['localName'] == 'button') {
      return false;
    }
    if (this.hide || !this.active) {
      this.nonModalService.activeWindow(this.factory);
    }
  }

}
