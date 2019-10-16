import React from 'react';
import { Box, Frame } from '../../src';

export default {
  title: 'Frame',
};

export const boxFrame69 = () => (
  <Frame ratio="6:9">
    <Box borderWidth="1px" padding="4px">I'm an image</Box>
  </Frame>
);

export const boxFrame43 = () => (
  <Frame ratio="4:3">
    <Box borderWidth="1px" padding="4px">I'm an image</Box>
  </Frame>
);

export const boxFrame12 = () => (
  <Frame ratio="1:2">
    <Box borderWidth="1px" padding="4px">I'm an image</Box>
  </Frame>
);
