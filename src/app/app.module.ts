import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FillterComponent } from './fillter/fillter.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FillterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
