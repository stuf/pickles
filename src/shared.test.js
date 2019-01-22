import * as S from './shared';

describe('Combinators', () => {
  test('I', () => {
    expect(S.I({})).toEqual({});
  });

  test('A', () => {
    expect(S.A(x => x * 2, 123)).toBe(246);
  });

  test('B', () => {
    const f = x => x * 2;
    const g = x => -x;
    expect(S.B(f, g, 123)).toBe(-246);
  });

  test('C', () => {
    const f = (a, b) => [a, b];
    expect(S.C(f, 123, 456)).toEqual([456, 123]);
  });

  test('fst', () => {
    expect(S.fst(1, 2, 3, 4)).toBe(1);
  });
});
