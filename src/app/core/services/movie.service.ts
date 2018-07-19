import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {BaseService} from '../http/base.service';
import {ArrayResponse} from '../http/interfaces/array-response';
import {Response} from '../http/interfaces/response';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  baseUrl = 'http://localhost:4567';

  constructor(private http: HttpClient,
              public snackBarService: MatSnackBar) {
    super(snackBarService);
  }

  popular(): Observable<ArrayResponse<Movie>> {
    return this.http.get<ArrayResponse<Movie>>(`${this.baseUrl}/popular`).pipe(
      map((data: ArrayResponse<Movie>) => data),
      catchError(this.handleError<ArrayResponse<Movie>>('listLatestMovies'))
    );
  }

  search(term: String): Observable<ArrayResponse<Movie>> {
    return this.http.post<ArrayResponse<Movie>>(`${this.baseUrl}/movie/search`, {term: term}).pipe(
      map((data: ArrayResponse<Movie>) => data),
      catchError(this.handleError<ArrayResponse<Movie>>('searchMovies'))
    );
  }

  get(id: Number): Observable<Response<Movie>> {
    return this.http.get<Response<Movie>>(`${this.baseUrl}/movie/${id}`).pipe(
      map((data: Response<Movie>) => data),
      catchError(this.handleError<Response<Movie>>('getMovie'))
    );
  }
}
