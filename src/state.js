import * as U from 'karet.util';
import { color } from 'd3-color';

export const initialState = {
  editor: {
    width: 32,
    height: 32,
    scale: 16,
    current: {
      position: [0, 0],
      color: color('#f00'),
      blob: null,
    },
  },
};

const state = U.atom(initialState);

state.debounce(500).log('state');

export default state;
