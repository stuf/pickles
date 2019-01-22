import * as React from 'karet';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import { color } from 'd3-color';
import { saveAs } from 'file-saver';

import Effs, * as E from './effects';
import enableUndo from './undo';
import * as M from './meta';
import * as H from './utils';
import Editor from './editor';
import Toolbar from './toolbar';
import { IconType } from './constants';
import { Button } from './components/ui';
import {
  Alert,
  ColorGrid,
  Group,
  Icon,
  StatusBar,
  StatusBarItem,
} from './components';

//

// FIXME: Remove me
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
  const current = {
    editorState: M.editorStateIn(state),
    cursorPosition: M.currentCursorPositionIn(state),
    canvasSize: M.currentCanvasSizeIn(state),
    selectedColor: M.currentColorIn(state),
    blob: M.currentBlobIn(state),
  };

  // Effect "subscription" temporary area

  const shouldTrySaveImage = U.thru(
    Effs,
    U.skipUnless(R.whereEq({ type: 'save-image' })),
  );

  const trySaveImage = U.thru(
    shouldTrySaveImage,
    U.mapValue(msg => ({ ...msg, blob: current.blob.get() })),
    U.skipUnless(R.identity),
    U.show,
    U.on({ value: ({ blob }) => saveAs(blob, `${+new Date()}.png`) })
  );

  //

  const sideEffs = [
    trySaveImage,
    enableUndo,
  ];

  //

  return (
    <main className="application-root">
      {U.sink(U.parallel(sideEffs))}
      <Alert title="Test alert">
        Foo
      </Alert>

      <header className="application__navigation">
        <nav className="application__navigation-items">
          <Button className="application__navigation-item">
            Default
          </Button>
          <Button disabled={true} className="application__navigation-item">
            Disabled
          </Button>
        </nav>
      </header>

      <Toolbar>
        <Icon name={IconType.EDIT} />
        <Icon name={IconType.CROP} />
      </Toolbar>

      <div className="application__main">
        <Editor state={current.editorState} />
      </div>

      <section className="application__tools">
        <Group title="Color"
               collapsible={true}>
          <ColorGrid colors={colors}
                     selected={current.selectedColor} />
        </Group>

        <Group title="Save image">
          <Button action={() => E.dispatch({ type: 'save-image' })}>
            Save image
          </Button>
        </Group>
      </section>

      <StatusBar>
        <StatusBarItem>
          Mouse: {R.apply(H.showTuple, current.cursorPosition)}
        </StatusBarItem>
        <StatusBarItem>
          Canvas size: {R.apply(H.showTuple, R.values(current.canvasSize))}
        </StatusBarItem>
      </StatusBar>
    </main>
  );
};

export default App;
