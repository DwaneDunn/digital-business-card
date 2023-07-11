import './Content.css';

/* eslint-disable */
import Name from './Name';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
/* eslint-enable */

function Content() {
  return (
    <main>
      <Name />
      <Buttons />
      <About />
      <Interests />
    </main>
  );
}

export default Content;
