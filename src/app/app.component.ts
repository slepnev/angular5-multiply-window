import {Component, ComponentRef} from '@angular/core';
import {NonModalService} from './shared/non-modal/non-modal.service';
import {TestComponent} from './test-component/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private nonModalService: NonModalService) { }

  openTest1Component() {
    this.nonModalService.openWindow(TestComponent)
      .then((c: ComponentRef<TestComponent>) => {
        /*
         * Do something with component ref
         */
      });
  }

  openTest2Component() {
    this.nonModalService.openWindow(TestComponent, {
      'welcome': 'Hello, World2!'
    })
  }

}
