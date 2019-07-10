import { configure } from '@storybook/react';

function loadStories() {
  require('../components/locker/index.story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);