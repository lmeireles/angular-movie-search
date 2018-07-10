import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MovieListComponent} from './pages/movie-list/movie-list.component';
import {SharedModule} from '../../shared/shared.module';
import {MovieSearchComponent} from './components/movie-search.component';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {MovieService} from '../../core/services/movie.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    MovieService
  ],
  declarations: [
    MovieSearchComponent,
    MovieListComponent
  ]
})
export class MoviesModule { }
