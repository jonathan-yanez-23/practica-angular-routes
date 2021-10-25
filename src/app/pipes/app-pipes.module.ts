import { NgModule } from '@angular/core';
import { SortHeroeListPipe } from './sort-heroe-list.pipe';

@NgModule({
  imports: [],
  declarations: [
    SortHeroeListPipe
  ],
  exports: [
      SortHeroeListPipe
  ]
})
export class AppPipesModule { }