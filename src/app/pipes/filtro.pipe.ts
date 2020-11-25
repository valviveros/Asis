import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(valuez: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
