import { createReducer, on } from '@ngrx/store';
import { addTodo, toggleTodo, deleteTodo } from './todo.actions';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { title }) => [
    ...state,
    { id: state.length + 1, title, completed: false }
  ]),
  on(toggleTodo, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id))
);
