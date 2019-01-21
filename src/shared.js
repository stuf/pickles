import * as K from 'kefir';
import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

// Functions

// Basic combinators
export const I = a => a;
export const A = R.curry((f, a) => f(a));
// export const K = R.curry((a, b) => a);
export const B = R.curry((f, g, a) => f(g(a)));
export const C = R.curry((b, a, f) => f(a, b));

/**
 * Take the first argument this function has been called with.
 *
 */
export const fst = I;

/**
 * Take the second argument this function has been called with
 */
// export const snd = K;

// Kefir

const _id = R.identity;

const _activationFn = () => {};

export const activate = obs => obs.onEnd(_activationFn);
export const deactivate = obs => obs.offEnd(_activationFn);

//

export const fromEvent = R.curry((type, source) => {
  return U.thru(
    source,
    U.flatMapLatest(s => U.fromEvents(s, type, _id)),
    U.toProperty,
  );
});

export const fromCallback = R.curry((fn, obs) => {
  const result = U.variable();



  return result;
})

// Lenses

export const splitMatrixAsN = n => L.lens(R.splitEvery(n), R.flatten);

// Elements

export const viewOffset = (target, ...props) =>
  U.view([L.props(...props), L.reread(R.values)], target);

export const viewOffset2 = R.curryN(2, (target, p1, p2) => viewOffset(target, p1, p2));

// Canvas

export const getCanvasContext = U.liftRec(R.invoker(1, 'getContext'));
export const getBoundingClientRect = U.liftRec(R.invoker(0, 'getBoundingClientRect'));

/**
 *
 * @param {HTMLCanvasElement} canvas
 */
export const getPngFromCanvas = canvas => {
  const blob = U.variable();
  canvas.toBlob(data => blob.set(data));
  return U.takeFirst(1, blob);
}

// Context

export const putContextImageData = U.liftRec(R.invoker(3, 'putImageData'));
export const putImageDataToContext = R.curryN(4, (ctx, data, x, y) => putContextImageData(data, x, y, ctx));
