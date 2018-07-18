import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {BaseService} from '../http/base.service';
import {ArrayResponse} from '../http/models/array-response';
import {Response} from '../http/models/response';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  baseUrl = 'http://localhost:4567';

  constructor(private http: HttpClient) {
    super();
  }

  popular(): Observable<ArrayResponse<Movie>> {
    return this.http.get<ArrayResponse<Movie>>(`${this.baseUrl}/popular`).pipe(
        map((data: ArrayResponse<Movie>) => data),
        catchError(this.handleError<ArrayResponse<Movie>>('listLatestMovies'))
      );
  }

  get(id: Number): Observable<Response<Movie>> {
    return this.http.get<Response<Movie>>(`${this.baseUrl}/movie/${id}`).pipe(
        map((data: Response<Movie>) => data),
        catchError(this.handleError<Response<Movie>>('getMovie'))
      );
  }
}
