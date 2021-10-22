import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from '../detalle/detalle/detalle.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: ':heroeId', component: HeroeDetailComponent},
      {path: 'list', component: ListComponent},
      {path: '**', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
