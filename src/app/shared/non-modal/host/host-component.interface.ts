import {ComponentFactory, Type} from '@angular/core';
import {WindowComponent} from '../window/window.component';

export interface HostComponentInterface {

  collection: Array<{factory: ComponentFactory<any>, id: any, options: any, hide: boolean, active: boolean}>;

  resolvers: Map<ComponentFactory<any>, any>;

  onComponentInWindow<T>(componentType, id, options?: {[p: string]: any});
  openFactoryInWindow<T>(factory, id, options?: {[p: string]: any}, hide?: boolean);

  unregisterWindow(factory);
  hideWindow(factory);
  activeWindow(factory);

}
