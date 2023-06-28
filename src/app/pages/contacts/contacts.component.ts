import { Component } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts:Contact[]=[];
      constructor(private cs:ContactService){
                   this.cs.getContacts().subscribe(
                     {
                        next:  (data:Contact[])=> this.contacts = data,
                        error: (error:any) => this.contacts = [] 
                     }
                   )
              }

}
