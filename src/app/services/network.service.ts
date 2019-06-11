import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  endpoint = 'http://localhost:3000/v5/';
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

  getNetworks() : Observable<any>{
    return this.http.get(this.endpoint + 'networks', this.httpOptions).pipe(map(this.extractData))
  }

  setNetwork(network) : Observable<any>{
    let params = JSON.stringify(network)
    return this.http.post(this.endpoint + 'save-network', params, this.httpOptions).pipe(map(this.extractData))
  }
}
