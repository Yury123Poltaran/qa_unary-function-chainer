'use strict';

const { chainer } = require('./chainer');

describe('chainer', () => {
  it('should return the same value if no functions are passed', () => {
    const fn = chainer([]);

    expect(fn(5)).toBe(5);
  });

  it('should apply a single function', () => {
    const double = x => x * 2;
    const fn = chainer([double]);

    expect(fn(3)).toBe(6);
  });

  it('should chain multiple functions correctly', () => {
    const f1 = x => x * 2; // 0 → 0
    const f2 = x => x + 2; // 0 → 2
    const f3 = x => Math.pow(x, 2); // 2 → 4
    const fn = chainer([f1, f2, f3]);

    expect(fn(0)).toBe(4);
  });

  it('should work with negative numbers', () => {
    const abs = x => Math.abs(x);
    const square = x => x * x;
    const fn = chainer([abs, square]);

    expect(fn(-3)).toBe(9);
  });
});
