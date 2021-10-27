import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHeroesRoutingModule } from './my-heroes-routing.module';
import { MyHeroesListComponent } from './my-heroes-list/my-heroes-list.component';
import { MyHeroesDetailComponent } from './my-heroes-detail/my-heroes-detail.component';
import { LocalheroesStorageService } from '../services/localheroes-storage.service';
import { MyHeroesCreationComponent } from './my-heroes-creation/my-heroes-creation.component';


@NgModule({
  declarations: [
    MyHeroesListComponent,
    MyHeroesDetailComponent,
    MyHeroesCreationComponent
  ],
  imports: [
    CommonModule,
    MyHeroesRoutingModule
  ],
  providers: [
    LocalheroesStorageService
  ]
})
export class MyHeroesModule { }
