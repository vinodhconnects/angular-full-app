import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  httpOptions:any

  constructor(private http:HttpClient) { }

  getReviews():Observable<any>{
    return this.http.get("http://localhost:4500/feedbacks")
  }

  postReview(obj:Review):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4500/feedbacks",obj,this.httpOptions)
  }
}
