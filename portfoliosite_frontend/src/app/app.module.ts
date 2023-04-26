import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SpinningobjectComponent } from './spinningobject/spinningobject.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PagenotfoundComponent,
    SpinningobjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
