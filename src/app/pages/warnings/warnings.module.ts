import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningsRoutingModule } from './warnings-routing.module';
import { WarningsComponent } from './warnings.component';


@NgModule({
  declarations: [
    WarningsComponent
  ],
  imports: [
    CommonModule,
    WarningsRoutingModule
  ]
})
export class WarningsModule { }
