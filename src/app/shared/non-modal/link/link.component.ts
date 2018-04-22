import { Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NonModalService } from '../non-modal.service';
import { nonModalCompnents } from '../non-modal-components';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input('component') public component;
  @Input('id') public id;
  @Input('caption') public caption;
  @Input('params') public params;
  @Input('componentType') public componentType;
  @Output('onComponent') public onComponent = new EventEmitter();

  constructor(private nonModalService: NonModalService) {
  }

  ngOnInit() {
    if (nonModalCompnents[this.component]) {
      this.componentType = nonModalCompnents[this.component];
    }
  }

  openComponent() {
    if (this.componentType && this.id !== null) {
      const options = {};
      options['caption'] = this.caption;
      options['params'] = this.params;
      this.nonModalService.openWindow(this.componentType, this.id, options)
        .then((c: ComponentRef<any>) => {
          this.onComponent.emit(c);
        });
    }
  }
}
