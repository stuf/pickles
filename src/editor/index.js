import * as React from 'karet';
// eslint-disable-next-line
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'ramda';

import * as S from '../shared';
import * as M from './meta';
import data from './mock-image';

const Editor = ({ state, dispatch }) => {
  // Canvas

  const canvas = U.variable();
  const ctx = S.getCanvasContext('2d', canvas);
  const putImageData = S.putContextImageData(data, 0, 0, ctx);


  // State slices

  const width = M.widthIn(state);
  const height = M.heightIn(state);
  const scale = M.scaleIn(state);
  const currentPosition = M.currentPositionIn(state);

  // Event listeners

  const onCanvasClick = S.fromEvent('click', canvas);
  const onCanvasMouseMove = S.fromEvent('mousemove', canvas);

  //

  const positions = [
    [onCanvasMouseMove, 'clientX', 'clientY'],
    [S.getBoundingClientRect(canvas), 'left', 'top'],
  ];

  /**
   * Don't ask. Wrote this when sick.
   * @type {K.Property<[number, number], never>}
   */
  const canvasCoordinates = U.combine(
    R.map(R.apply(S.viewOffset2), positions),
    R.pipe(R.zip,R.map(R.pipe(R.apply(R.subtract), Math.ceil))),
  );

  /**
   * Don't. Ask.
   * @type {K.Property<[number, number], never>}
   */
  const pixelCoordinates = U.combine(
    [canvasCoordinates, [scale, scale]],
    R.pipe(R.zip, R.map(R.pipe(R.apply(R.divide), Math.floor))),
  );

  //

  const updatePixelPosition = U.thru(
    pixelCoordinates,
    U.set(currentPosition),
  );

  const init = U.parallel([
    putImageData,
    updatePixelPosition,
  ]);

  const multiply = U.liftRec(R.multiply);
  const scaleWith = n => multiply(scale, n);

  const scaledPos = {
    x: multiply(M.fstIn(pixelCoordinates), scale),
    y: multiply(M.sndIn(pixelCoordinates), scale),
  }

  return (
    <div className="editor-root">
      {U.sink(init)}

      <section className="editor-wrapper">
        <div className="editor-body">
          <div className="editor-pixel-highlight"
               style={{
                 transform: U.string`translateX(${scaledPos.x}px) translateY(${scaledPos.y}px)`,
                 width: scale,
                 height: scale,
               }} />
          <div className="editor-canvas-wrapper">
            <canvas width={width}
                    height={height}
                    style={{
                      width: scaleWith(width),
                      height: scaleWith(height),
                    }}
                    ref={U.refTo(canvas)}
                    className="editor-canvas" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Editor;
