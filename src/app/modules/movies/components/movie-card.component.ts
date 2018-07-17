import {Component, HostListener, Input} from '@angular/core';
import {Movie} from '../../../core/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss']
})
export class MovieCardComponent {
  private hover = false;

  @Input() movie: Movie;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

  get excerpt(): String {
    return this.movie.overview.slice(0, 100) + '...';
  }

  get class(): String {
    return this.hover ? 'mat-elevation-z5' : 'mat-elevation-z1';
  }

}
