import React from 'react';
import { Box, Stack } from '../../src';

export default {
  title: 'Stack',
};

export const boxStack = () => (
  <Stack>
    <Box borderWidth="1px">Top</Box>
    <Box borderWidth="1px">Middle</Box>
    <Box borderWidth="1px">
      <Stack>
        <Box borderWidth="1px">> Top</Box>
        <Box borderWidth="1px">> Middle</Box>
        <Box borderWidth="1px">> Bottom</Box>
      </Stack>
    </Box>
  </Stack>
);
