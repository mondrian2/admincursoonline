import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {TypeComplete} from '../model/type-complete';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompleteService {

  constructor(private http: HttpClient) {}

  public get(): Observable<TypeComplete> {
    return this.http.get<TypeComplete>(`${environment.uriServer}complete-items`);
  }

  public search(id: string): Observable<TypeComplete> {
    console.log(id);
    return this.http.get<TypeComplete>(`${environment.uriServer}complete-item/${id}`);
  }

  public searchByExercise(id: number): Observable<TypeComplete> {
    return this.http.get<TypeComplete>(`${environment.uriServer}complete-item-by-exercise/${id}`);
  }

  public post(data): Observable<TypeComplete> {
    return this.http.post<TypeComplete>(`${environment.uriServer}complete-item`, data);
  }

  public delete(id: number){
    console.log(id);
    return this.http.delete(`${environment.uriServer}complete-item/${id}`);
  }

  public put(id: number, data: TypeComplete) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<TypeComplete>(`${environment.uriServer}complete-item/${id}`, data, httpOptions);
  }
}
