import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'container',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
