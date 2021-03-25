import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Exercise} from '../model/exercise';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) {}

  public get(): Observable<Exercise> {
    return this.http.get<Exercise>(`${environment.uriServer}exercises`);
  }

  public search(id: string): Observable<Exercise> {
    console.log(id);
    return this.http.get<Exercise>(`${environment.uriServer}exercise/${id}`);
  }

  public post(data): Observable<Exercise> {
    return this.http.post<Exercise>(`${environment.uriServer}exercise`, data);
  }

  public delete(id: number){
    console.log(id);
    return this.http.delete(`${environment.uriServer}exercise/${id}`);
  }

  public put(id: number, data: Exercise) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<Exercise>(`${environment.uriServer}exercise/${id}`, data, httpOptions);
  }
}
