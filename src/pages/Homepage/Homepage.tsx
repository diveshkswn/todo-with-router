import React from 'react';
import {
  Text, Center,
  Select,
  Container,
} from '@chakra-ui/react';
import { TodoList } from './TodoList';

export function Homepage() {
  return (
    <div className="homepage-main-container">
      <Container height="100vh" minWidth="100vw" backgroundColor="whitesmoke">
        <Center padding="16">
          <Text fontSize="4xl" textAlign="center" fontWeight="bold" display="block">Simple TODO application</Text>

        </Center>
        <Container>
          <Select
            placeholder="Select option"
            maxWidth="250px"
            marginLeft="23vw"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option value="option1">Completed</option>
            <option value="option2">Un completed</option>
          </Select>
        </Container>
        <TodoList />
      </Container>
    </div>
  );
}
