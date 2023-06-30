import { Pipe, PipeTransform } from '@angular/core';
import { Review } from '../model/review';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(target: Review[], type:string): Review[] {
  
      if(type=="All")
         return target
      else {
        return  target.filter((x:Review)=> x.type == type)
      }
  }

}
