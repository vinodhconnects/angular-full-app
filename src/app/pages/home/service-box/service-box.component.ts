import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-service-box',
  templateUrl: './service-box.component.html',
  styleUrls: ['./service-box.component.css']
})
export class ServiceBoxComponent {
  @Input() service:Service= {title:"",image:"",description:""}
}
