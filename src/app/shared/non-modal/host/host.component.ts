import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, QueryList, Type, ViewChildren } from '@angular/core';
import { HostComponentInterface } from './host-component.interface';
import { NonModalService } from '../non-modal.service';
import { LoggerService } from '../../../core/logger/logger.service';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-non-modal-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements HostComponentInterface, OnInit {

  @ViewChildren(WindowComponent) viewChildren: QueryList<WindowComponent>;
  /*
   * Collection of component factories
   * for passing it into window components
   */
  collection: Array<{ factory: ComponentFactory<any>, id: any, options: any, hide: boolean, active: boolean }> = [];

  /*
   * Store component factory and promise resolver
   * until window is not registered
   */
  resolvers: Map<ComponentFactory<any>, any> = new Map<ComponentFactory<any>, any>();


  constructor(private nonModalService: NonModalService,
              private resolver: ComponentFactoryResolver,
              private logger: LoggerService) {
  }

  ngOnInit() {
    /*
     * Common host registration
     */
    this.nonModalService.registerHost(this);
  }

  public onComponentInWindow<T>(componentType: Type<T>, id: any, options?: { [p: string]: any }): Promise<ComponentRef<T>> {
    /*
     * Convert component type into factory
     */
    const index = this.collection.findIndex(x => x['factory']['componentType'] === componentType
      && x['id'] === id);
    if (index !== -1) {
      this.activeWindow(this.collection[index].factory);
      return new Promise<ComponentRef<T>>((resolve) => resolve);
    }

    const factory = this.resolver.resolveComponentFactory(componentType);
    return this.openFactoryInWindow(factory, id, options);
  }

  public openFactoryInWindow<T>(factory: ComponentFactory<T>, id: any, options?: { [p: string]: any }): Promise<ComponentRef<T>> {
    /*
     * Store factory into collection, create promise
     * and waiting until window is not registered
     */

    let resolver;
    const promise: Promise<ComponentRef<T>> = new Promise<ComponentRef<T>>((resolve) => resolver = resolve);

    this.resolvers.set(factory, resolver);
    this.collection.push({factory: factory, id: id, options: options, hide: false, active: true});
    this.activeWindow(factory);
    return promise;
  }

  public unregisterWindow(factory) {
    /*
     * Trigger hosted component OnDestroy hook and
     * splice component factory from collection
     */
    this.viewChildren.forEach(view => {
      if (view.factory === factory) {
        view.componentRef.destroy();
      }
    });
    this.collection.splice(this.collection.findIndex(x => x['factory'] === factory), 1);
  }

  public hideWindow(factory) {
    /*
     * Hide component
     */
    const index = this.collection.findIndex(x => x['factory'] === factory);
    this.collection[index]['hide'] = true;
    this.collection[index]['active'] = false;
    this.nonModalService.onChagneCollection();
  }

  public activeWindow(factory) {
    /*
     * Active component
     */
    this.deactiveColletion();
    const index = this.collection.findIndex(x => x['factory'] === factory);
    this.collection[index]['hide'] = false;
    this.collection[index]['active'] = true;
    this.nonModalService.onChagneCollection();
  }

  public deactiveColletion() {
    this.collection.map(item => item['active'] = false);
  }
}
