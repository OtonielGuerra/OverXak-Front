import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
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


  setCurso(curso) : Observable<any>{
    let params = JSON.stringify(curso)
    return this.http.post(this.endpoint + 'save-curso', params, this.httpOptions).pipe(map(this.extractData))
  }
}
