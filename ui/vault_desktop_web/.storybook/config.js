import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/brief/index.story.js');
  require('../src/components/detail/index.story.js');
  require('../src/components/signup/index.story.js');
  require('../src/components/elements/index.story.js');
}

configure(loadStories, module);