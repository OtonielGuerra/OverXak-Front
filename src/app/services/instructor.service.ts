import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  endpoint = 'http://localhost:3000/v4/';
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

  setInstructor(instructor) : Observable<any>{
    let params = JSON.stringify(instructor)
    return this.http.post(this.endpoint + 'save-instructor', params, this.httpOptions).pipe(map(this.extractData))
  }
}
