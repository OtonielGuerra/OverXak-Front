import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  endpoint = 'http://localhost:3000/v3/';
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

  getCourses() : Observable<any>{
    return this.http.get(this.endpoint + 'listar-curso', this.httpOptions).pipe(map(this.extractData))
  }
}
