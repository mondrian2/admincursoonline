import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Testifier {

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(environment.uriServer + 'exercicios');
  }
}
