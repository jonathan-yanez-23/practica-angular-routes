import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroes.interface';
@Pipe({
  name: 'sortHeroeList'
})
export class SortHeroeListPipe implements PipeTransform {
  // Ordena la lista segun su ID
  transform(list: Heroe[]) {
    list.sort(function(h: Heroe){
      return h.id;
    });
    return list;
  }

}
