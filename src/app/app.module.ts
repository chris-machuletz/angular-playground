import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from './ui/components/header/header.module';
import { MobileNavModule } from './ui/components/mobile-nav/mobile-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MobileNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
