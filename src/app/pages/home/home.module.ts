import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CombineWidgetModule } from 'src/app/ui/components/combine-widget/combine-widget.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CombineWidgetModule
  ]
})
export class HomeModule { }
