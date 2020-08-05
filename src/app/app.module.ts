import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { StockTableComponent } from './stock-table/stock-table.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {StockService} from './providers/stock.service';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    StockTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AlertModule.forRoot(),
    HttpClientModule,
    AppRoutingModule],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
