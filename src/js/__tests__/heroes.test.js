import sortingHeroes from './app.js';

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const received = sortingHeroes(
  [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ],
);

test('sort heroes from max health to min', () => {
  expect(received).toEqual(expected);
});

test('sort heroes from max health to min', () => {
  const result = sortingHeroes(
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
  );

  const exp = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(exp);
});

test('sortHeroes: Not toBe', () => {
  expect(sortingHeroes(expected)).not.toBe(received);
});
