import { withInfo } from '@storybook/addon-info';
import { addDecorator, configure } from '@storybook/react';
import './example-base.css';

// automatically import all files ending in *.stories.js
configure(require.context('./stories', true, /\.stories\.tsx$/), module);

// Add info decorator
addDecorator(withInfo({
  inline: true,
  source: true,
}));
