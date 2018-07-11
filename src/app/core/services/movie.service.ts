import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {BaseService} from '../http/base.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  baseUrl = '';
  movies: Movie[] = [];

  constructor(private http: HttpClient) {
    super();
  }

  latest(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl).pipe(
        map((data: Movie[]) => this.movies = data),
        catchError(this.handleError<Movie[]>('listLatestMovies'))
      );
  }
}
