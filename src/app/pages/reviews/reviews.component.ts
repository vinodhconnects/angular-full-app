import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import {Review} from '../../model/review'
import { services } from 'src/app/model/data';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews:Review[]  = []  
  types:string[] = ["All", ...services];
  selected:string ="All"
  
  constructor (private rs:ReviewService) {
      this.rs.getReviews().subscribe({
          next: (data:Review[]) => this.reviews =data,
          error: ()=> {}
      })
  }
}
