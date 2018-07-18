import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div class="container {{class}}">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @Input() class = '';
}
