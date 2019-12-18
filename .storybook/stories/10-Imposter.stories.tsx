import React from 'react';
import { Box, Imposter } from '../../src';

export default {
  title: 'Imposter',
};

export const boxImposter = () => (
  <Imposter
    fixed
    margin="var(--s1)"
    style={{
      width: '100vw',
      zIndex: 1, // Needed in Story
    }}
  >
    <Box
      padding="var(--s1)"
      style={{
        background: 'black',
        color: 'white',
      }}
    >
      I am a Box in an Imposter
    </Box>
  </Imposter>
);
