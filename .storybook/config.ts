import { configure } from '@storybook/react';
import './example-base.css';

// automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.tsx$/), module);
