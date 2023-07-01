import { getLocaleMonthNames } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
httpOptions:any;
status:boolean=false;
username:string ="";
token:string="";
  constructor(private http:HttpClient) { 
    let username =  localStorage.getItem("username");
    let token = localStorage.getItem("token");
    if(username && token) {
      this.status =true
      this.username =username
      this.token =token
    }
  }

  getStatus():boolean {
    return this.status
  }

  getUser():string {
    return this.username
  }

  login(obj) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:4500/signin",obj,this.httpOptions)
  }

  logout(){
   this.status = false
   localStorage.removeItem("token")
   localStorage.removeItem("username")
  }

  setLogin(username,token ){
     this.status =true
     this.token =token
     this.username =username
     localStorage.setItem("username",username)
     localStorage.setItem("token",token)
  }
}
