import * as React from 'karet';
// eslint-disable-next-line
import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'kefir.ramda';

import * as S from '../shared';
import * as M from './meta';
import * as H from '../utils';
import { color } from 'd3-color';
import data from './mock-image';

const Editor = ({ state, dispatch }) => {
  // Canvas

  const canvas = U.variable();
  const ctx = S.getCanvasContext('2d', canvas);

  // State slices

  const width = M.widthIn(state);
  const height = M.heightIn(state);
  const scale = M.scaleIn(state);
  const currentPosition = M.currentPositionIn(state);

  // Event listeners
  const onCanvasClick = S.fromEvent('click', canvas);
  const onCanvasMouseMove = S.fromEvent('mousemove', canvas);

  // Track mouse movement and click coordinates
  const movedCoordinates = H.getCoordinatesRelative(canvas, onCanvasMouseMove, scale);
  const clickedCoordinates = H.getCoordinatesRelative(canvas, onCanvasClick, scale);

  //

  const scaleWith = n => R.multiply(scale, n);
  const scaledPos = {
    x: R.multiply(M.fstIn(M.sndIn(movedCoordinates)), scale),
    y: R.multiply(M.sndIn(M.sndIn(movedCoordinates)), scale),
  }

  // Create pixel with the selected color and clicked position.
  const createPixelOnClickedCoords = U.mapValue(([x, y]) =>
    [H.mkPixel(color('#55415f')), x, y], M.sndIn(clickedCoordinates));

  // Side-effects

  /**
   * Put placeholder/background image in canvas
   */
  const putImageData = S.putContextImageData(data, 0, 0, ctx);

  /**
   * Update the current mouse coordinates in the editor state
   */
  const updatePixelPosition = U.thru(
    M.sndIn(movedCoordinates),
    U.set(currentPosition),
  );

  /**
   * Draw a pixel to the rendering context
   */
  const drawPixelOnClick = U.combine(
    [createPixelOnClickedCoords, ctx],
    ([d, x, y], c) => c.putImageData(d, x, y),
  );

  //

  return (
    <div className="editor-root">
      {/* Merge all side effects together into a sink. */}
      {U.sink(U.parallel([
        putImageData,
        updatePixelPosition,
        drawPixelOnClick,
      ]))}

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
