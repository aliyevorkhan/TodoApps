import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ItemList: Todo[] = [];
  Item: Todo = { Completed: false, ItemName: ' ' };
  AddItem() {
    this.ItemList.push({ 'Completed': this.Item.Completed, 'ItemName': this.Item.ItemName });
    this.Item.ItemName = '';
    console.log(this.ItemList);
  }

  TodoComplete(todo: Todo) {
    this.ItemList.find(x => x.ItemName == todo.ItemName).Completed = true;
    console.log(this.ItemList);
  }

  delete(todo: Todo) {
    let index = this.ItemList.indexOf(todo);
    this.ItemList.splice(index, 1);
  }
}
