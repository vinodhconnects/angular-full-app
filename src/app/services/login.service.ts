import { getLocaleMonthNames } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
status:boolean=false;
username:string ="";
token:string="";
  constructor() { 
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
}
