import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { BooksComponent } from './master/components/books/books.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterComponent } from './master/master.component';
import { CustomYearPipe } from './master/shared/pipes/custom-year.pipe';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MasterComponent,
    CustomYearPipe,

  ],
  imports: [
    BrowserModule,
    NzButtonModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
