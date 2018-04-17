import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, Type} from '@angular/core';
import {HostComponentInterface} from './host-component.interface';
import {NonModalService} from '../non-modal.service';
import {LoggerService} from '../../../core/logger/logger.service';
import {WindowComponent} from '../window/window.component';

@Component({
  selector: 'app-non-modal-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements HostComponentInterface, OnInit {

  /*
   * Collection of component factories
   * for passing it into window components
   */
  collection: Array<[ComponentFactory<any>, any]> = [];

  /*
   * Store component factory and promise resolver
   * until window is not registered
   */
  resolvers: Map<ComponentFactory<any>, any> = new Map<ComponentFactory<any>, any>();


  constructor(private nonModalService: NonModalService,
              private resolver: ComponentFactoryResolver,
              private logger: LoggerService) { }

  ngOnInit() {
    /*
     * Common host registration
     */
    this.nonModalService.registerHost(this);
  }

  public onComponentInWindow<T>(componentType: Type<T>, options?: {[p: string]: any}): Promise<ComponentRef<T>> {
    /*
     * Convert component type into factory
     */
    const factory = this.resolver.resolveComponentFactory(componentType);
    return this.openFactoryInWindow(factory, options);
  }

  public openFactoryInWindow<T>(factory: ComponentFactory<T>, options?: {[p: string]: any}): Promise<ComponentRef<T>> {
    /*
     * Store factory into collection, create promise
     * and waiting until window is not registered
     */
    let resolver;
    const promise: Promise<ComponentRef<T>> = new Promise<ComponentRef<T>>((resolve) => resolver = resolve);

    this.resolvers.set(factory, resolver);
    this.collection.push([factory, options]);

    return promise;
  }

  public unregisterWindow(window: WindowComponent) {
    /*
     * Trigger hosted component OnDestroy hook and
     * splice component factory from collection
     */
    window.componentRef.destroy();
    this.collection.splice(this.collection.findIndex(x => x[0] === window.factory), 1);
  }

}
