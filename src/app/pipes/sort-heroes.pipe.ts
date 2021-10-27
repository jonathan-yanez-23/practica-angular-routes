import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroes.interface';

@Pipe({
  name: 'sortHeroes'
})
export class SortHeroesPipe implements PipeTransform {

  // ttransform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(list: Heroe[]){
    const sortedHeroes: Heroe[] = list;
    list.sort(function(h: Heroe){
      return h.id
    });
    return sortedHeroes;
  }

}
