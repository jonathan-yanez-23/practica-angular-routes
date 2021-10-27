import { NgModule } from '@angular/core';
import { SortHeroesPipe } from './pipes/sort-heroes.pipe';

@NgModule({
  imports: [],
  declarations: [
    SortHeroesPipe
  ],
  exports: [
      SortHeroesPipe
  ]
})
export class AppPipesModule { }