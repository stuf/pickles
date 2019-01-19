import * as U from 'karet.util';
import * as R from 'ramda';
import * as L from 'partial.lenses';

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

// Lenses

export const splitMatrixAsN = n => L.lens(R.splitEvery(n), R.flatten);

// Elements

export const viewOffset = (target, ...props) =>
  U.view([L.props(...props), L.reread(R.values)], target);

export const viewOffset2 = R.curryN(2, (target, p1, p2) => viewOffset(target, p1, p2));

// Canvas

export const getCanvasContext = U.liftRec(R.invoker(1, 'getContext'));
export const getBoundingClientRect = U.liftRec(R.invoker(0, 'getBoundingClientRect'));

// Context

export const putContextImageData = U.liftRec(R.invoker(3, 'putImageData'));
