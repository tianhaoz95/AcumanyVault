import { configure } from '@storybook/react';

import initProvider from 'services/provider'

initProvider('firebase')

function loadStories() {
  require('../src/components/brief/index.story.js');
  require('../src/components/detail/index.story.js');
  require('../src/components/sign_in/index.story.js');
  require('../src/components/elements/index.story.js');
  require('../src/components/account_page/index.story.js');
}

configure(loadStories, module);