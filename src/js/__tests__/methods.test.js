import Bowman from '../bowman';

test('Ошибка при повышении уровня умершего персонажа', () => {
  function levelUpCharacter() {
    const character = new Bowman('123', 'Bowman');

    character.health = 0;
    character.levelUp();
  }

  expect(levelUpCharacter).toThrowError('Нельзя повысить уровень умершего персонажа');
});

test('Повышение уровня персонажа', () => {
  const character = new Bowman('12345', 'Bowman');

  character.health = 80;
  character.levelUp();

  const expected = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(character).toEqual(expected);
});

test('Уменьшение здоровья при получении урона', () => {
  const character = new Bowman('12345', 'Bowman');
  character.damage(65);
  const received = character.health;

  const expected = 51.25;

  expect(received).toBeCloseTo(expected);
});

test('Метод damage не работает при здоровье = 0', () => {
  const character = new Bowman('12345', 'Bowman');
  character.health = 0;
  character.damage(65);
  const received = character.health;

  const expected = 0;

  expect(received).toBeCloseTo(expected);
});
