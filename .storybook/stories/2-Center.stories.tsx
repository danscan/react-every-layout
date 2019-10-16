import React from 'react';
import { Box, Center } from '../../src';

export default {
  title: 'Center',
};

export const boxedCenteredBox = () => (
  <Box borderWidth="1px" padding="1em">
    <Center andText>
      <Box borderWidth="1px">
        Contents
      </Box>
    </Center>
  </Box>
);
