import React from 'react';
import { Box } from '../../src';

export default {
  title: 'Box',
};

export const simpleBorderedBox = () => (
  <Box borderWidth="1px" padding="1em">
    Contents
  </Box>
);
