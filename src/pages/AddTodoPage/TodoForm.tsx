import React, { useState } from 'react';

import {

  Input,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useTodoContext } from '../../context/ContextProvider';
import { addTodo } from '../../context/actions';

export function TodoForm() {
  const toast = useToast();
  const [input, setInput] = useState('');
  // @ts-ignore
  const { dispatch } = useTodoContext();
  // @ts-ignore
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate('/home');
  };
  const handleFormSubmit = () => {
    if (input) {
      dispatch(addTodo(input));
      toast({
        title: 'Todo Created.',
        status: 'success',
        duration: 800,
        isClosable: true,
      });
    }
  };
  return (
    <Center marginTop="100px">
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Todo Title</FormLabel>
        <Input
          id="todoTitle"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Title is required for TODO.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
        <Button
          ml="40"
          mt={4}
          colorScheme="yellow"
          type="submit"
          onClick={handleBackToList}
        >
          Back to List Page
        </Button>
      </FormControl>

    </Center>
  );
}
