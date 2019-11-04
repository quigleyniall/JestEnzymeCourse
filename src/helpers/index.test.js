import { getLetterMatchCount } from './';

test('it returns perfect match', () => {
  const result = getLetterMatchCount('train', 'train');
  expect(result).toBe(5);
});

test('it return zero when no letters in common', () => {
  const result = getLetterMatchCount('train', 'Yes');
  expect(result).toBe(0);
});

test('it returns only common letters', () => {
  const result = getLetterMatchCount('cook', 'combine');
  expect(result).toBe(2);
})