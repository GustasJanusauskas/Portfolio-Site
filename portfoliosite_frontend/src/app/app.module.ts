import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

import { ContactsService } from "./services/contacts.service";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PagenotfoundComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
