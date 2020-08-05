import {Component, OnInit, Input, NgZone} from '@angular/core';
import io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {StockService} from '../providers/stock.service';

const socket = io(environment.socketUrl);
@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {

  title = 'dashboard';
  stocks = [];
  updated = false;
  isTrue = true;
  tableData = [];
  message;
  constructor(private stockService: StockService, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.getStocks();
    socket.on('welcomemessage', (res) => {
    });
    socket.on('data_updated', (res) => {
      this.message = res.msg;
      this.updated = true;
       this.getStocks();
    });
  }
  getStocks(){
    this.stockService.getAggregatedData().subscribe((res) => {
      this.ngZone.run(() => {

        this.stocks = res.data;
      });
    });

  }

}
