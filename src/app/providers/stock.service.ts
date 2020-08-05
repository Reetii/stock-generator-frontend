import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }
  getAggregatedData(): Observable<any> {
    return this.http.get(`http://localhost:5000/api/v1/stocks/aggregated-data`).pipe();
  }
}
