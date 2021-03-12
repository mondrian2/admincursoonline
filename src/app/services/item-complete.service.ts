import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
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

  public post(data): Observable<ItemComplete> {
    return this.http.post<ItemComplete>(environment.uriServer, data);
  }

  public delete(id: number): Observable<ItemComplete> {
    return this.http.delete<ItemComplete>(environment.uriServer + 'id');
  }

  public put(data: ItemComplete): Observable<HttpEvent<ItemComplete>> {
    return this.http.put<ItemComplete>(environment.uriServer, data, null);
  }
}
