import React, { useState } from 'react';
import {
  Text, Center,
  Select,
  Container,
} from '@chakra-ui/react';
import { TodoList } from './TodoList';

export function Homepage() {
  const [appliedFilter, setAppliedFilter] = useState('All');
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
              setAppliedFilter(e.target.value);
            }}
          >
            <option value="completed">Completed</option>
            <option value="uncompleted">Un completed</option>
          </Select>
        </Container>
        <TodoList appliedFilter={appliedFilter} />
      </Container>
    </div>
  );
}
