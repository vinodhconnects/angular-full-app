import { Directive, EventEmitter,HostListener,Input } from '@angular/core';
import { Router } from '@angular/router';
import { services } from '../model/data';

@Directive({
  selector: '[serviceDetail]'
})
export class ServiceDetailDirective {
@Input() serviceDetail:string=""
  constructor(private router:Router) { }

  @HostListener("click")
  runThis():void {
    let pageNumber = services.indexOf(this.serviceDetail)+1
            this.router.navigate(["/home/details/"+pageNumber])
  }
}
