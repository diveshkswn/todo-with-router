import React from 'react';

import {
  Text, Center,
} from '@chakra-ui/react';
import { Todo } from './Todo';

export function TodoList() {
  return (
    <>
      <Center>
        <Text fontWeight="bold" fontSize="3xl" marginBottom="16">Todo List</Text>
      </Center>
      <Todo name="Sample TOd" isChecked />
      <Todo name="Sample TOd" />
    </>
  );
}
