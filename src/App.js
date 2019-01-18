import * as React from 'karet';

import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as M from './meta';
import Editor from './editor';

const App = ({ state }) =>
  <main className="application-root">
    <header className="application__navigation">
    </header>

    <div className="application__main">
      <Editor state={M.editorStateIn(state)} />
    </div>

    <section className="application__tools">
      <section className="group-section">
        <header className="group-section__header">
          Heading
        </header>

        <div className="group-section__content">
          Content
        </div>
      </section>
    </section>

    <footer className="application__status-bar">
      <div className="application__status-bar__content">
        <div className="application__status-bar__item">
          {U.thru(
            state,
            U.view(['editor', 'currentPosition']),
            R.join(', '),
            R.concat('('),
            R.flip(R.concat)(')'),
          )}
        </div>
      </div>
    </footer>
  </main>;

export default App;
