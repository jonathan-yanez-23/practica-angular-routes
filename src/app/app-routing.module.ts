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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
