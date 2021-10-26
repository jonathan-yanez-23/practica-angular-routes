import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesListComponent } from './my-heroes-list/my-heroes-list.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'my-heroes', component: MyHeroesListComponent},
      {path: '**', component: MyHeroesListComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHeroesRoutingModule { }
