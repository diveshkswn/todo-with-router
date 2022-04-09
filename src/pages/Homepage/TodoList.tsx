/* eslint-disable max-len */
import React from 'react';

import {
  Text, Center, Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Todo } from './Todo';
import { useTodoContext, Todoprops } from '../../context/ContextProvider';
// @ts-ignore
export function TodoList({ appliedFilter }) {
  // @ts-ignore
  const { todos } = useTodoContext();
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/add');
  };
  const filterFn = (item:Todoprops) => {
    if (appliedFilter === 'completed') {
      if (item.complete) {
        return item;
      }
    } else if (appliedFilter === 'uncompleted') {
      if (!item.complete) {
        return item;
      }
    } else {
      return item;
    }
    return null;
  };

  return (
    <>
      <Center>
        <Text fontWeight="bold" fontSize="3xl" marginBottom="16">Todo List</Text>
      </Center>
      {todos.filter(filterFn).map((todo:Todoprops) => <Todo key={todo.id} id={todo.id} name={todo.title} isCompleted={todo.complete} />)}
      <Center>
        <Button
          mt={4}
          width="320px"
          colorScheme="blue"
          type="button"
          onClick={handleNavigation}
        >
          Add new Todo
        </Button>
      </Center>
    </>
  );
}
