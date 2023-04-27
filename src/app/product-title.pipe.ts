import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTitle'
})
export class ProductTitlePipe implements PipeTransform {

  transform(title: string, limit: number): string {
    return title.split(' ').slice(0, limit).join(' ');
  }

}
