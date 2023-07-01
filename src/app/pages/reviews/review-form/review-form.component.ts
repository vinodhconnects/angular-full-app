import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent {
  name:string=""
  email:string=""
  type:string=""
  message:string=""
  types:string[]=["Branding and Communication","Inbound &  Content Marketing",
  "Film &  Webinar","Digital Marketing","ECommerce & Websites","Market Analysis"]
  errors:string[]= []

  constructor(private rs:ReviewService) {

  }

  postReview():void {
    this.errors = []
    let regex=/^[a-z][a-z\._0-9]{3,}@[a-z]{3,15}\.(com|net|org|in)$/
    if(this.name.length<3)
       this.errors.push("Name should be atleast three characters long")
    if(!regex.test(this.email))
       this.errors.push("Email Must be in email format")
    if(this.type=="")
       this.errors.push("Please select a project type")
    if(this.message.length<20)
       this.errors.push("Message should be atleast 20 characters long")
    if(this.errors.length == 0 ){
      let obj = { 
                  id: Math.round(Math.random()*100000),
                  name:this.name,
                  message:this.message,
                   type: this.type,
                   email: this.email
                }
         this.rs.postReview (obj).subscribe(
            {
              next: () =>  {
                                 alert("review is successfully stored")
                                 location.reload()
                            },
               error: () => alert("problem in saving review")
            }
         )
         

    }
  }
}