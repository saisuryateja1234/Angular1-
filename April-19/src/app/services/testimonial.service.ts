import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }    

  getfeedback():Observable<any>{
      return this.http.get("http://localhost:4500/feedbacks")
  }
}
