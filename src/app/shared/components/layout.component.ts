import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent {
  @Input() containerClass = '';
  @Input() title = 'Movie Search';

  constructor(private router: Router) {
  }

  home() {
    this.router.navigateByUrl('/movies');
  }
}
