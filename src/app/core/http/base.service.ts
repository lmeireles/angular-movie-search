import {Observable, of} from 'rxjs';

export abstract class BaseService {

  abstract baseUrl: string;

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

  /** Log a HeroService message with the MessageService */
  protected log(message: string) {
    console.log(message);
    // TODO: create message service
    // this.messageService.add('HeroService: ' + message);
  }
}
