import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  httpOptions:any

  constructor(private http:HttpClient) { }

  postEnquiry(obj:any,fflag:boolean):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    if(!fflag)
      return this.http.post("http://localhost:5600/api/enquiries",obj,this.httpOptions)
    return this.http.post("http://localhost:5600/api/enquiries",obj)
  }
}
