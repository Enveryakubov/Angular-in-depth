import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multby',
})
export class MultbyPipe implements PipeTransform {
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }
}
