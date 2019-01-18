import * as R from 'ramda';

const width = 256;
const height = 256;
const blockSize = 8;

const full = R.multiply(255);

const row = R.range(0, width);

const r1 = R.reduce((res, i) => i % 2 === 0 ? res.concat(0) : res.concat(1), [], row);
const r2 = R.reduce((res, i) => i % 2 === 0 ? res.concat(1) : res.concat(0), [], row);

const xs = R.map(x => R.repeat([full(x), full(x), full(x), full(0.2)], blockSize), r1);
const ys = R.map(y => R.repeat([full(y), full(y), full(y), full(0.2)], blockSize), r2);
const zs = R.concat(R.unnest(xs), R.unnest(ys));

const _arr = R.flatten(R.repeat(zs, height / 2));

//

const arr = new Uint8ClampedArray(_arr);
const imageData = new ImageData(arr, height);

export default imageData;
