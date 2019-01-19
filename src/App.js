import * as React from 'karet';

import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import { color } from 'd3-color';

import * as M from './meta';
import * as H from './utils';
import { Group, StatusBar, StatusBarItem, ColorGrid } from './components';
import Editor from './editor';

//

const colors = [
  color('#000000'),
  color('#55415f'),
  color('#646964'),
  color('#d77355'),
  color('#508cd7'),
  color('#64b964'),
  color('#e6c86e'),
  color('#dcf5ff'),
];

//

const App = ({ state }) => {
  const currentCursorPosition = M.currentCursorPositionIn(state);

  return (
    <main className="application-root">
      <header className="application__navigation">
        <ul className="application__navigation-items">
          <li className="application__navigation-item">
            <button className="application__navigation-button">
              <span>Poop</span>
            </button>
          </li>
        </ul>
      </header>

      <div className="application__main">
        <Editor state={M.editorStateIn(state)} />
      </div>

      <section className="application__tools">
        <Group title="Color"
              collapsible={true}>
          <ColorGrid colors={colors} />
        </Group>
      </section>

      <StatusBar>
        <StatusBarItem>
          {R.apply(H.showTuple, currentCursorPosition)}
        </StatusBarItem>
      </StatusBar>
    </main>
  );
};

export default App;
