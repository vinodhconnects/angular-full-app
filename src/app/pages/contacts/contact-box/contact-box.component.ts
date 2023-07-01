import { Component ,Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent implements OnInit,OnChanges,OnDestroy{
  @Input()   contact:Contact = {
       title: "",address:"",city:"",pin:0,image:""
     }

     constructor(){
      //  console.log("contactbox created")
        //console.log(this.contact)
     }
     ngOnChanges(){
      console.log(this.contact) // every time the component receives input
     }

     ngOnInit() {
         //  console.log("contact box initialized")
          // console.log(this.contact)
     }

     ngOnDestroy() {
         console.log("contact  box destroyed")
     }
}
