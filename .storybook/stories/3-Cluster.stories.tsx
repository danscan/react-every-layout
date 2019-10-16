import React from 'react';
import { Box, Cluster } from '../../src';

export default {
  title: 'Cluster',
};

export const boxCluster = () => (
  <Cluster>
    <div>
      <Box borderWidth="1px" padding="var(--s0)">Videos</Box>
      <Box borderWidth="1px" padding="var(--s0)">Images</Box>
      <Box borderWidth="1px" padding="var(--s0)">Posts</Box>
      <Box borderWidth="1px" padding="var(--s0)">Features</Box>
      <Box borderWidth="1px" padding="var(--s0)">Neoscope</Box>
      <Box borderWidth="1px" padding="var(--s0)">The Byte</Box>
      <Box borderWidth="1px" padding="var(--s0)">Social</Box>
      <Box borderWidth="1px" padding="var(--s0)">Newsletter</Box>
    </div>
  </Cluster>
);

