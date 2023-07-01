import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent {
  ftoggle:boolean=false
  eform:any
  constructor(private fb:FormBuilder,private hs:EnquiryService){
  this.eform= this.fb.group(
    {
      name:['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(20)]],
      email:['',Validators.email],
      subject:['',[Validators.required,Validators.minLength(5)]],
      supportfile: [null,[]]
    }
  )
 
  }
  postEnquiry():void {
    let name =this.eform.get('name').value
    let subject=this.eform.get('subject').value
    let description=this.eform.get('description').value
    let email=this.eform.get('email').value
    let obj:any;
    if(this.ftoggle){
    var formData: any = new FormData();
    formData.append("name",name);
    formData.append("description",description);
    formData.append("email",email);
    formData.append("subject",subject);
    formData.append("supportfile",this.eform.get('supportfile').value);
    obj=formData
    }
    else {
       obj={name:name,description:description,email:email,subject:subject}
    }

    this.hs.postEnquiry(obj,this.ftoggle).subscribe(
       {
         next: () => { alert("file uploaded"); location.reload()},
         error: (x) => {console.log(x);alert("Something went wrong")}
       }
    )

  }

  uploadFile1(event:any) {
  
        const file = (event.target as HTMLInputElement).files[0];
    this.eform.patchValue({
      supportfile: file
    });
    this.eform.get('supportfile').updateValueAndValidity()
  
  }


}