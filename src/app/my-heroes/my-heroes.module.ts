import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHeroesRoutingModule } from './my-heroes-routing.module';
import { MyHeroesListComponent } from './my-heroes-list/my-heroes-list.component';
import { MyHeroesDetailComponent } from './my-heroes-detail/my-heroes-detail.component';


@NgModule({
  declarations: [
    MyHeroesListComponent,
    MyHeroesDetailComponent
  ],
  imports: [
    CommonModule,
    MyHeroesRoutingModule
  ]
})
export class MyHeroesModule { }
