import * as U from 'karet.util';
import * as R from 'kefir.ramda';
import * as S from './shared';

export const showTuple = U.liftRec((x, y) => `(${x}, ${y})`);

//

export const mkPixel = color => {
  console.log('color', color);
  const data = new Uint8ClampedArray([color.r, color.g, color.b, 255]);
  console.log(data);
  const imageData = new ImageData(data, 1, 1);

  return imageData;
}

//

export const getCoordinatesRelative = (anchor, target, scale) => {
  const coords = U.combine(
    [S.viewOffset2(target, 'clientX', 'clientY'),
    S.viewOffset2(S.getBoundingClientRect(anchor), 'left', 'top')],
    R.pipe(R.zip, R.map(R.pipe(R.apply(R.subtract), Math.ceil))),
  );

  const pixelCoords = U.combine(
    [coords, [scale, scale]],
    R.pipe(R.zip, R.map(R.pipe(R.apply(R.divide), Math.floor))),
  );

  return U.template([coords, pixelCoords]);
};
