import * as React from 'karet';

import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as M from './meta';
import * as H from './utils';
import { Group, StatusBar, StatusBarItem } from './components';
import Editor from './editor';

const App = ({ state }) => {
  const currentCursorPosition = M.currentCursorPositionIn(state);

  return (
    <main className="application-root">
      <header className="application__navigation">
      </header>

      <div className="application__main">
        <Editor state={M.editorStateIn(state)} />
      </div>

      <section className="application__tools">
        <Group title="Color"
              collapsible={true}>
          Content
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
