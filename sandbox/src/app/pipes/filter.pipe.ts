import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], term: string = '') {
    return list.filter((post: any) => post.text.includes(term));
  }
}
