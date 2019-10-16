import React from 'react';
import { Box, Reel } from '../../src';

export default {
  title: 'Reel',
};

export const boxReel = () => (
  <Reel thumbColor="blue">
    <Box borderWidth="1px" style={{ height: '20em', width: '20em'}}>1</Box>
    <Box borderWidth="1px" style={{ height: '20em', width: '20em'}}>2</Box>
    <Box borderWidth="1px" style={{ height: '20em', width: '20em'}}>3</Box>
  </Reel>
);
