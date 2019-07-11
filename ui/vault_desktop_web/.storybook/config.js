import { configure } from '@storybook/react';

function loadStories() {
  require('../components/brief/index.story.js');
  require('../components/detail/index.story.js');
}

configure(loadStories, module);