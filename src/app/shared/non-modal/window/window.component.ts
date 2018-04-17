import {Component, ComponentFactory, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NonModalService} from '../non-modal.service';

@Component({
  selector: 'app-non-modal-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @ViewChild('componentContainer', {read: ViewContainerRef}) private container;
  @Input('data') public set data([factory, options]) {
    this.factory = factory;
    this.options = options;
  }

  public factory: ComponentFactory<any>;
  public options;

  public componentRef: ComponentRef<any>;

  constructor(private nonModalService: NonModalService) { }

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

  close() {
    /*
     * Trigger unregister on close
     */
    this.nonModalService.unregisterWindow(this);
  }

}
