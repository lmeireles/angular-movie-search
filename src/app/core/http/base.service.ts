import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

export abstract class BaseService {

  abstract baseUrl: string;

  constructor(public snackBarService: MatSnackBar) {}

  /**
   *
   * @param {string} operation
   * @param {T} result
   * @returns {(error: any) => Observable<T>}
   */
  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  protected log(message: string) {
    console.log(message);
    this.snackBarService.open(message, 'Ok', {
      horizontalPosition: 'start'
    });
  }
}
