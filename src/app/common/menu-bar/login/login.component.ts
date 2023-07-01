import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""
  
  constructor(private ls:LoginService,  public dialogRef: MatDialogRef<LoginComponent>){

  }
  login() {
       this.ls.login( {email: this.email, password: this.password}).subscribe(
          {
              next: (data:any)=>{
                let token =data.accessToken
                let username = data.user.username
                this.ls.setLogin(username,token)
                this.dialogRef.close()
              },
              error:  ()=>{
                 alert("Login failed")
                 this.dialogRef.close()
              }
          }
       ) 
  }
}
