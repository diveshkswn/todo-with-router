import React from 'react';
import {
  Text, Center,

  Container,
} from '@chakra-ui/react';
import { TodoForm } from './TodoForm';

export function AddTodoPage() {
  return (
    <Container>
      <Center>
        <Text>Add Todo Page</Text>

      </Center>
      <TodoForm />
    </Container>
  );
}
