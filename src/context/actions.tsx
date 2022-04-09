import { ADD_TODO, COMPLETE_TODO } from './types';

export function addTodo(todoTitle : String) {
  return {
    type: ADD_TODO,
    payload: { id: Date.now(), title: todoTitle },
  };
}

export function markCompleteTodo(todoId : number) {
  return {
    type: COMPLETE_TODO,
    payload: { id: todoId },
  };
}
