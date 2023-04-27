import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list:Product[],term:string): Product[] {
    return list.filter((x)=> x.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
