import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ItemComplete} from '../model/item-complete';

@Injectable({
  providedIn: 'root'
})
export class ItemCompleteService {

  constructor(private http: HttpClient) {}

  public get(): Observable<ItemComplete> {
    return this.http.get<ItemComplete>(`${environment.uriServer}complete-items`);
  }

  public search(id: string): Observable<ItemComplete> {
    console.log(id);
    return this.http.get<ItemComplete>(`${environment.uriServer}complete-item/${id}`);
  }

  public post(data): Observable<ItemComplete> {
    return this.http.post<ItemComplete>(`${environment.uriServer}complete-item`, data);
  }

  public delete(id: number){
    console.log(id);
    return this.http.delete(`${environment.uriServer}complete-item/${id}`);
  }

  public put(id: number, data: ItemComplete) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<ItemComplete>(`${environment.uriServer}complete-item/${id}`, data, httpOptions);
  }
}
