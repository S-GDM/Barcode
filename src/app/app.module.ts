import { ComponentComponent } from './component/component.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import {NgxBarcodeModule} from 'ngx-barcode';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId:'ng-cli-universal'}),AppRoutingModule,NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
