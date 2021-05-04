import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Alternative } from '../model/alternative';

@Injectable({
  providedIn: 'root',
})
export class AlternativeService {
  constructor(private http: HttpClient) {}

  public get(): Observable<Alternative> {
    return this.http.get<Alternative>(
      `${environment.uriServer}alternative-items`
    );
  }

  public search(id: string): Observable<Alternative> {
    console.log(id);
    return this.http.get<Alternative>(
      `${environment.uriServer}alternative-item/${id}`
    );
  }

  public searchByExercise(id: number): Observable<Alternative> {
    return this.http.get<Alternative>(
      `${environment.uriServer}alternative-item-by-exercise/${id}`
    );
  }

  public post(data): Observable<Alternative> {
    return this.http.post<Alternative>(
      `${environment.uriServer}alternative-item`,
      data
    );
  }

  public delete(id: number) {
    console.log(id);
    return this.http.delete(`${environment.uriServer}alternative-item/${id}`);
  }

  public put(id: number, data: Alternative) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.put<Alternative>(
      `${environment.uriServer}alternative-item/${id}`,
      data,
      httpOptions
    );
  }
}
