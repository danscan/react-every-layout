import React from 'react';
import { Box, Switcher } from '../../src';

export default {
  title: 'Switcher',
};

export const boxSwitcher = () => (
  <Switcher>
    <div>
      <Box borderWidth="1px">Top</Box>
      <Box borderWidth="1px">Middle</Box>
      <Box borderWidth="1px">
        <Switcher>
          <div>
            <Box borderWidth="1px">> Top</Box>
            <Box borderWidth="1px">> Middle</Box>
            <Box borderWidth="1px">> Bottom</Box>
          </div>
        </Switcher>
      </Box>
    </div>
  </Switcher>
);
