import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { NonModalService } from '../non-modal.service';
import { PhysicalCartComponent } from '../../../physicals/physical-cart/physical-cart.component';
import { nonModalCompnents } from '../non-modal-components';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input('component') public component;
  @Input('componentType') public componentType;

  constructor(private nonModalService: NonModalService) {
  }

  ngOnInit() {
    if (nonModalCompnents[this.component]) {
      this.componentType = nonModalCompnents[this.component];
    }
  }

  openComponent() {
    if (this.componentType) {
      this.nonModalService.openWindow(this.componentType)
        .then((c: ComponentRef<any>) => {
          /*
           * Do something with component ref
           */
        });
    }
  }
}
