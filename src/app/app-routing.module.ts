import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockTableComponent} from './stock-table/stock-table.component';
import {AppComponent} from './app.component';


const routes: Routes = [


  {
    path: 'dashboard',
    component: StockTableComponent ,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
