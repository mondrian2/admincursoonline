import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ItemAlternative} from '../model/item-alternative';

@Injectable({
  providedIn: 'root'
})
export class ItemAlternativeService {

  constructor(private http: HttpClient) {}

  public get(): Observable<ItemAlternative> {
    return this.http.get<ItemAlternative>(`${environment.uriServer}alternative-items`);
  }

  public post(data): Observable<ItemAlternative> {
    return this.http.post<ItemAlternative>(environment.uriServer, data);
  }

  public delete(id: number): Observable<ItemAlternative> {
    return this.http.delete<ItemAlternative>(environment.uriServer + 'id');
  }

  public put(data: ItemAlternative): Observable<HttpEvent<ItemAlternative>> {
    return this.http.put<ItemAlternative>(environment.uriServer, data, null);
  }
}
