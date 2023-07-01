import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  loginMessage:string="Sign In"  
  loginStatus:boolean=false
  constructor(private ls:LoginService){
             if(ls.getStatus()) {
                  this.loginMessage = ls.getUser()+" , Signout";
                  this.loginStatus = true
             }
    }
    login(){

    }
}
