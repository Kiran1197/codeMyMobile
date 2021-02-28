import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  baseUrl="http://localhost:3000/users";

  public getUsersData(body): Observable<any> {
    return this.http.post(this.baseUrl+`/getUsers`,body);
  }

  public getFriends(body): Observable<any> {
    return this.http.post(this.baseUrl+`/getFriends`,body);
  }
}
