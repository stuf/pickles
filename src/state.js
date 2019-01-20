import * as U from 'karet.util';

const state = U.atom({
  editor: {
    width: 32,
    height: 32,
    scale: 16,
    currentPosition: [0, 0],
    current: {
      position: [0, 0],
      color: null,
    },
  }
});

state.debounce(500).log('state');

export default state;
