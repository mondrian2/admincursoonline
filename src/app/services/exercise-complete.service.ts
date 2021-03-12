import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ExerciseComplete} from '../model/exercise-complete';

@Injectable({
  providedIn: 'root'
})
export class ExerciseCompleteService {

  constructor(private http: HttpClient) {}

  public get(): Observable<ExerciseComplete> {
    return this.http.get<ExerciseComplete>(`${environment.uriServer}complete-exercises`);
  }

  public post(data): Observable<ExerciseComplete> {
    return this.http.post<ExerciseComplete>(environment.uriServer, data);
  }

  public delete(id: number): Observable<ExerciseComplete> {
    return this.http.delete<ExerciseComplete>(environment.uriServer + 'id');
  }

  public put(data: ExerciseComplete): Observable<HttpEvent<ExerciseComplete>> {
    return this.http.put<ExerciseComplete>(environment.uriServer, data, null);
  }
}
