import { expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sum.ts'

test('Adds 1 + 2 to equal 3', () => {
  // Arrange
  const a: number = 1;
  const b: number = 2;
  const expected: number = 3;
  
  // Act
  const result = sum(a, b);

  // Assert
  expect(result).toBe(expected);
});

test('Adds [5, 5, 5] to be 15', () =>{

  // Arrange
  const arr: number[] = [5, 5, 5];
  const expected: number = 15;

  // Act
  const result = addArray(arr);

  // Assert
  expect(result).toBe(expected);
})
