import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MovieListComponent} from './pages/movie-list/movie-list.component';
import {SharedModule} from '../../shared/shared.module';
import {MovieSearchComponent} from './components/movie-search.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule
} from '@angular/material';
import {MovieService} from '../../core/services/movie.service';
import {MovieCardComponent} from './components/movie-card.component';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    MovieService
  ],
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    MovieCardComponent
  ]
})
export class MoviesModule { }
