import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineRoutingModule } from './combine-routing.module';
import { CombineComponent } from './combine.component';


@NgModule({
  declarations: [
    CombineComponent
  ],
  imports: [
    CommonModule,
    CombineRoutingModule
  ]
})
export class CombineModule { }
