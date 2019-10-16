import React from 'react';
import { Box, Center, Sidebar } from '../../src';

export default {
  title: 'Sidebar',
};

export const boxSidebar = () => (
  <Sidebar>
    <div>
      <Box borderWidth="1px">
        Side
      </Box>
      <Box borderWidth="1px">
        <Center>
          <Box borderWidth="1px">
            Main
          </Box>
        </Center>
      </Box>
    </div>
  </Sidebar>
)