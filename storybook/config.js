import { configure } from '@kadira/storybook';
import '../src/style/style.css';
import '../src/components/Search/SearchStyle.css';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
