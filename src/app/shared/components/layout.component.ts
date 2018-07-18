import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent {
  @Input() containerClass = '';
  @Input() title = 'Movie Search';
}
