import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ExerciseAlternative} from '../model/exercise-alternative';

@Injectable({
  providedIn: 'root'
})
export class ExerciseAlternativeService {

  constructor(private http: HttpClient) {}

  public get(): Observable<ExerciseAlternative> {
    return this.http.get<ExerciseAlternative>(`${environment.uriServer}exercises-alternative`);
  }

  public post(data): Observable<ExerciseAlternative> {
    return this.http.post<ExerciseAlternative>(`${environment.uriServer}exercise-alternative`, data);
  }

  public delete(id: number): Observable<ExerciseAlternative> {
    return this.http.delete<ExerciseAlternative>(`${environment.uriServer}exercise-alternative` + 'id');
  }

  public put(data: ExerciseAlternative): Observable<HttpEvent<ExerciseAlternative>> {
    return this.http.put<ExerciseAlternative>(`${environment.uriServer}exercise-alternative`, data, null);
  }
}
