import { Component ,Input} from '@angular/core';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent {
  @Input()   contact:Contact = {
       title: "",address:"",city:"",pin:0,image:""
     }
}
