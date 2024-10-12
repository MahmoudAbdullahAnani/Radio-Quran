export function getRandomNumber(numbers: number[]) {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}
