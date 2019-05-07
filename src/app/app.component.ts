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
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(e => (this.todos = e));
  }
  addNewTodo() {
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
}
