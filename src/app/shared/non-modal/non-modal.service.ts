import { ComponentFactory, ComponentRef, EventEmitter, Injectable, Type } from '@angular/core';
import { HostComponentInterface } from './host/host-component.interface';
import { LoggerService } from '../../core/logger/logger.service';
import { WindowComponent } from './window/window.component';

@Injectable()
export class NonModalService {

  private host: HostComponentInterface;
  public changeCollection: EventEmitter<any> = new EventEmitter();

  constructor(private logger: LoggerService) {
  }

  public registerHost(host: HostComponentInterface) {
    /*
     * Register new window host
     */
    this.host = host;
    this.logger.log.emit('|>> Host registered');
  }

  public openWindow<T>(componentType: Type<T>, id: any, options?: { [key: string]: any }): Promise<ComponentRef<T>> {
    /*
     * Open new window with component
     */
    this.logger.log.emit(`|>> Open window for ${options['caption']}`);
    return this.host.onComponentInWindow(componentType, id, options);
  }

  public registerWindow(window: WindowComponent) {
    /*
     * Registration new window and
     * promise resolving
     */
    this.resolveComponentRef(window.factory, window.componentRef);
  }

  public resolveComponentRef(factory: ComponentFactory<any>, componentRef: ComponentRef<any>) {
    /*
     * Resolving component reference promise
     */
    const resolver = this.host.resolvers.get(factory);
    resolver(componentRef);

    this.host.resolvers.delete(factory);
  }

  public unregisterWindow(factory) {
    /*
     * Unregister window, trigger OnDestroy hook
     */
    this.host.unregisterWindow(factory);
    this.logger.log.emit(`|>> Host collection length: ${this.host.collection.length}`);
  }

  public hideWindow(factory) {
    /*
     * Hide window
     */
    this.host.hideWindow(factory);
    this.logger.log.emit(`|>> Hide window`);
  }

  public onChagneCollection() {
    this.changeCollection.emit(this.host.collection);
  }

  public activeWindow(factory) {
    this.host.activeWindow(factory);
    this.logger.log.emit(`|>> Active window`);
  }
}
