export function sum(a: number, b: number) {
  return a + b;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;
  test('adds 100 + 200 to equal 300', () => {
    expect(sum(100, 200)).toBe(300);
  })
}