import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ActividadComponent } from './home/actividad/actividad.component';
import { DefinicionComponent } from './home/definicion/definicion.component';
import { FuncionamientoComponent } from './home/funcionamiento/funcionamiento.component';


@NgModule({
  declarations: [
    HomeComponent,
    ActividadComponent,
    DefinicionComponent,
    FuncionamientoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
