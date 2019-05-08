import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newTodo: string;
  title = '待辦事項';
  placeholder = '還有什麼事情沒有做';
  showTodos = true;
  todos: any[];
  selectType = 1;
  leftItems = 0;

  // 將所需要的服務注入
  constructor(private dataService: DataService) {}
  // 元件一啟動就會執行的function
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getData().subscribe(data => this.todos = data );
  }
  addNewTodo() {
    console.log('新增待辦事項內容:');
    console.log(this.newTodo);
    this.todos.push({
      name: this.newTodo,
      status: false
    });
    this.newTodo = '';
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
  checkLeftItems() {

  }
  clearCompleted() {
    // 清除已經完成的事情篩選掉
    this.todos = this.todos.filter(data => !data.status);
  }
  changeSelectType(type) {
    this.selectType = type;
  }
  changeDataStatus(status) {
    // 狀態改變的時候計算還剩下幾件事情
    this.leftItems = this.todos.filter(data => !data.status).length;
    switch (this.selectType) {
      // 所有
      case 1:
        return true;
      // 進行中
      case 2:
      return status ? false : true;
      // 已完成
      case 3:
      return status ? true : false;
    }
  }
}
