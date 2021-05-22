import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from './mobile-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MobileNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MobileNavComponent
  ]
})
export class MobileNavModule { }
