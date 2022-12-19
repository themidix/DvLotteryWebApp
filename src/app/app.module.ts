import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {AdmiServices} from "./services/admi.services";
import {AdmiLoginPageComponent} from "./admi-login-page/admi-login-page.component";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdmiLoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
