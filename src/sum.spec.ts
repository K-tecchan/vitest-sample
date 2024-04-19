import { expect, test } from 'vitest'
import { sum } from './sum'
import { sumsum } from './sumsum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('adds 1 + 2 twice to equal 6', () => {
  expect(sumsum(1, 2)).toBe(6);
})