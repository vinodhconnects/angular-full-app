import { Component } from '@angular/core';
import { Service } from 'src/app/models/service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   services:Service[]=[];

   constructor(private hs:HomeService){
     this.hs.getServices().subscribe(
       {
          next: (data:Service[]) => this.services = data,
          error: ()=> this.services =[]
       }
     )
   }
}
