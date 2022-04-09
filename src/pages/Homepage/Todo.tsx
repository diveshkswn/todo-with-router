import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface TodoProps {
    name : String;
    isChecked ?: Boolean;
}

export function Todo({ name, isChecked = false } : TodoProps) {
  return (
    <Center marginBottom="4">
      <Box display="flex" alignItems="center" as="div" borderWidth="1px" borderRadius="md" bg={isChecked ? 'green.200' : 'whiteAlpha.50'} minHeight="12" minWidth="80">
        <Box paddingLeft="5">
          <Text fontWeight="medium">{name}</Text>
        </Box>
        <Box as="button" marginLeft="auto" borderWidth="1px" bg="telegram.100" minWidth="10" padding="5px" marginRight={1} borderRadius="sm">
          <CheckIcon h={6} w={6} />
        </Box>
      </Box>
    </Center>
  );
}
