import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHeroesRoutingModule } from './my-heroes-routing.module';
import { MyHeroesListComponent } from './my-heroes-list/my-heroes-list.component';


@NgModule({
  declarations: [
    MyHeroesListComponent
  ],
  imports: [
    CommonModule,
    MyHeroesRoutingModule
  ]
})
export class MyHeroesModule { }
