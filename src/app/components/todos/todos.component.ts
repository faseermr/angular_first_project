import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos?: Todo[];

  inputTodo: string = 'welcome';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }

  addTodo(): void {
    this.todos?.push({
      content: this.inputTodo,
      completed: false,
    });

    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((e, i) => i !== id);
  }
}
