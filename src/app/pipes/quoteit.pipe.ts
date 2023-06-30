import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quoteit'
})
export class QuoteitPipe implements PipeTransform {

  transform(target: string): string {
     let searchItems=['suberb','super','great','good','excellent']

     for(let x of searchItems) {
         if(target.toLowerCase().indexOf(x)!=-1)
             return  '" '+target+ ' " '
     }

     return target;
  }

}
