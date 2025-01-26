import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todos/todo.reducer';
import { addTodo, deleteTodo } from './todos/todo.actions';
import { selectTodos } from './todos/todo.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<Todo[]>;
  newTodo = '';

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  
  onAddTodo() {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ title: this.newTodo }));
      this.newTodo = '';
    }
  }

  onDeleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
