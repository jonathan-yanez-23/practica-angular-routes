import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { ApiheroesService } from '../services/apiheroes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';


@NgModule({
  declarations: [
    ListComponent,
    HeroeDetailComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule
  ],
  providers: [ApiheroesService]
})
export class ListModule { }
