import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../../core/services/movie.service';
import {Movie} from '../../../../core/models/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  get genre() {
    return this.movie.genres.map(g => g.name).join(', ');
  }

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMovie(id);
  }

  getMovie(id: Number) {
    this.movieService.get(id).subscribe(
      data => this.movie = data.result);
  }

}
