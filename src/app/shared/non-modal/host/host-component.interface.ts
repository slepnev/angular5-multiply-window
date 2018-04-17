import {ComponentFactory, Type} from '@angular/core';
import {WindowComponent} from '../window/window.component';

export interface HostComponentInterface {

  collection: Array<[ComponentFactory<any>, any]>;

  resolvers: Map<ComponentFactory<any>, any>;

  onComponentInWindow<T>(componentType, options?: {[p: string]: any});
  openFactoryInWindow<T>(factory, options?: {[p: string]: any});

  unregisterWindow(window: WindowComponent);

}
