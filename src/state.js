import * as U from 'karet.util';

const state = U.atom({
  editor: {
    width: 32,
    height: 32,
    scale: 16,
    currentPosition: [0, 0],
    colors: 8,
  }
});

state.debounce(500).log('state (debounced)');

export default state;
