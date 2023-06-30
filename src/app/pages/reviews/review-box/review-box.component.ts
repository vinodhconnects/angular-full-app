import { Component,Input } from '@angular/core';
import { services } from 'src/app/model/data';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent {
 
  @Input() review: Review = {id:0,name:" ",email:"",message:"",type:""}


}
