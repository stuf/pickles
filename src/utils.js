import * as U from 'karet.util';

export const showTuple = U.liftRec((x, y) => `(${x}, ${y})`);
