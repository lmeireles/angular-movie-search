import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../../core/services/movie.service';
import {Movie} from '../../../../core/models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.latest().subscribe(data => this.movies = data);
  }

}
