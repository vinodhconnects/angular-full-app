import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/model/details';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:number=0
  details:Details={title:"",description: []};
  image:string=""
         constructor(private route:ActivatedRoute,private hs:HomeService){

              this.route.params.subscribe(
                  param =>  {
                      this.id = param["id"]
                      this.getDetail()
                      this.getService()
                  }
              )

         }

         getDetail(){
              this.hs.getDetail(this.id).subscribe({
                  next: (data:Details) => this.details =data,
                  error: () => {}
              })
         }

         getService(){
                 this.hs.getService(this.id).subscribe( {
                    next: (data:any) => this.image =data.image,
                    error: () => {} 
                 })
         }
}
