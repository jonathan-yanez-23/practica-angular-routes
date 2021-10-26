import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => 
    import('./home/home.module')
    .then(module => module.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => 
    import('./list/list.module')
    .then(module => module.ListModule)
  },
  {
    path: 'my-heroes',
    loadChildren: () => 
    import('./my-heroes/my-heroes.module')
    .then(module => module.MyHeroesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
