import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineComponent } from './combine.component';

const routes: Routes = [
  { path: '', component: CombineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombineRoutingModule { }
