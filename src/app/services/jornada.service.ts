import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JornadaService {
  endpoint = 'http://localhost:3000/v6/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private extractData(res) {
    let body = res;
    return body || {} || [];
  }

  public setJornada(jornada) : Observable<any>{
    let params = JSON.stringify(jornada)
    return this.http.post(this.endpoint + 'save-jornada', params, this.httpOptions).pipe(map(this.extractData))
  }
}
