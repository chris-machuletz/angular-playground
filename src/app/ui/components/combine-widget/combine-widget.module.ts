import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineWidgetComponent } from './combine-widget.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CombineWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CombineWidgetComponent
  ]
})
export class CombineWidgetModule { }
