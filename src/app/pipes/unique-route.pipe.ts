import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueRoute'
})
export class UniqueRoutePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
