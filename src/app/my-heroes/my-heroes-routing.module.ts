import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroesCreationComponent } from './my-heroes-creation/my-heroes-creation.component';
import { MyHeroesDetailComponent } from './my-heroes-detail/my-heroes-detail.component';
import { MyHeroesListComponent } from './my-heroes-list/my-heroes-list.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'my-heroes', component: MyHeroesListComponent},
      {path: 'creation', component: MyHeroesCreationComponent},
      {path: ':heroeId', component: MyHeroesDetailComponent},
      {path: '**', component: MyHeroesListComponent},
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHeroesRoutingModule { }
