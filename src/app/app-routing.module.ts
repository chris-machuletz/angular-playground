import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'explore', loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'combine', loadChildren: () => import('./pages/combine/combine.module').then(m => m.CombineModule) },
  { path: 'warnings', loadChildren: () => import('./pages/warnings/warnings.module').then(m => m.WarningsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
