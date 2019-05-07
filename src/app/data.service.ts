import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    // 將網路傳輸相關功能的模組注入
    private http: HttpClient
  ) { }
  getData() {
    // 指定取得資料的路徑
    return this.http.get<any[]>('/assets/data.json');
  }
}
