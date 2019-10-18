import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';
import './example-base.css';

// Automatically import all files ending in *.stories.tsx
configure(require.context('./stories', true, /\.stories\.tsx$/), module);

// Add info decorator
addDecorator(withInfo({
  inline: true,
  source: true,
}));
