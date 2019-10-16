import React from 'react';
import { Box, Cover } from '../../src';

export default {
  title: 'Cover',
};

export const boxCover = () => (
  <Cover centered=".main">
    <Box borderWidth="1px" padding="4px">Videos</Box>
    <Box className="main" borderWidth="1px" padding="4px">Posts</Box>
    <Box borderWidth="1px" padding="4px">Features</Box>
  </Cover>
);

