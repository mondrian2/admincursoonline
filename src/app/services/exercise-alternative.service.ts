import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseAlternativeService {

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(environment.uriServer + '/alternative-exercises');
  }

  public post(data): Observable<any> {
    return this.http.post(environment.uriServer, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(environment.uriServer + 'id');
  }

  public update(id: number, data: any): Observable<any> {
    return this.http.patch(environment.uriServer, id, data);
  }
}
