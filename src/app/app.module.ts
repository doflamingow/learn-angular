import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
