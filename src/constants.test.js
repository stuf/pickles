import * as C from './constants';

describe('constants', () => {
  test('Config', () => {
    expect(C.Config)
      .toEqual({ localStorageKey: 'picksel' });
  });
});
