import * as R from 'ramda';

const _activationFn = () => {};

export const activate = obs => obs.onEnd(_activationFn);
export const deactivate = obs => obs.offEnd(_activationFn);
