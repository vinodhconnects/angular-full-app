import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  loginMessage:string="Sign In"  
  loginStatus:boolean=false
  constructor(private ls:LoginService,public dialog: MatDialog){
             if(ls.getStatus()) {
                  this.loginMessage = ls.getUser()+" , Signout";
                  this.loginStatus = true
             }
    }
    login(){
       if(this.ls.getStatus()) {
          this.ls.logout()
          this.loginMessage = "Sign In"
       }
       else {
          //this.ls.login();
          const dialogRef = this.dialog.open(LoginComponent);

          dialogRef.afterClosed().subscribe(result => {
               if(this.ls.getStatus()) {
                  this.loginMessage = this.ls.getUser()+" , Signout";
               }
          });
       }
    }
}
