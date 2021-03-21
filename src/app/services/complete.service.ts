import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Complete} from '../model/type-complete';

@Injectable({
  providedIn: 'root'
})
export class CompleteService {

  constructor(private http: HttpClient) {}

  public get(): Observable<Complete> {
    return this.http.get<Complete>(`${environment.uriServer}complete-items`);
  }

  public search(id: string): Observable<Complete> {
    console.log(id);
    return this.http.get<Complete>(`${environment.uriServer}complete-item/${id}`);
  }

  public post(data): Observable<Complete> {
    return this.http.post<Complete>(`${environment.uriServer}complete-item`, data);
  }

  public delete(id: number){
    console.log(id);
    return this.http.delete(`${environment.uriServer}complete-item/${id}`);
  }

  public put(id: number, data: Complete) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<Complete>(`${environment.uriServer}complete-item/${id}`, data, httpOptions);
  }
}
