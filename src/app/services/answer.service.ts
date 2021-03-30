import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Answer} from '../model/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {}

  public get(): Observable<Answer> {
    return this.http.get<Answer>(`${environment.uriServer}answer-items`);
  }

  public search(id: string): Observable<Answer> {
    console.log(id);
    return this.http.get<Answer>(`${environment.uriServer}answer-item/${id}`);
  }

  public searchByExercise(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${environment.uriServer}answer-item-by-exercise/${id}`);
  }

  public post(data): Observable<Answer> {
    return this.http.post<Answer>(`${environment.uriServer}answer-item`, data);
  }

  public delete(id: number){
    console.log(id);
    return this.http.delete(`${environment.uriServer}answer-item/${id}`);
  }

  public put(id: number, data: Answer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<Answer>(`${environment.uriServer}answer-item/${id}`, data, httpOptions);
  }
}
