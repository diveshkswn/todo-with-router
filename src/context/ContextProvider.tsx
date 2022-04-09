/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useReducer } from 'react';
import { ADD_TODO, COMPLETE_TODO } from './types';

export interface LayoutProps {
    children: React.ReactNode
 }

export interface Todoprops{
     id : number;
     title : String;
     complete : boolean;
 }

const initialTodos:Todoprops[] = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: true,
  },
];
export interface actionProps{
    type : String;
    payload : any;
}
const reducer = (state : Todoprops[], action : actionProps) => {
  switch (action.type) {
    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ADD_TODO: {
      return [...state, { ...action.payload }];
    }
    default:
      return state;
  }
};
export interface ContextValueProps{
    todos : Todoprops[];
    dispatch : React.Dispatch<actionProps>
}

const GlobalContext = createContext([]);

function ContextProvider({ children } : LayoutProps) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <GlobalContext.Provider value={{
      // @ts-ignore
      todos,
      dispatch,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default React.memo(ContextProvider);

export function useTodoContext() {
  return useContext(GlobalContext);
}
