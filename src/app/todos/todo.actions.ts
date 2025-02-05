import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add Todo', props<{ title: string }>());

export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
