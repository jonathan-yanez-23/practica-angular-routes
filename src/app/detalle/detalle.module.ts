import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiheroesService } from '../apiheroes.service';
import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    HttpClientModule
  ],
  providers: [ApiheroesService]
})
export class DetalleModule { }
