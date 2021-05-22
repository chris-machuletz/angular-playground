import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarningsComponent } from './warnings.component';

const routes: Routes = [
  { path: '', component: WarningsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningsRoutingModule { }
