import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Ошибка при длине имени < 2', () => {
  function createCharacter() {
    const character = '1';
    const type = 'Bowman';

    return new Bowman(character, type);
  }

  expect(createCharacter).toThrowError('Недопустимая длина имени');
});

test('Ошибка при длине имени > 10', () => {
  function createCharacter() {
    const character = '01234567891011';
    const type = 'Bowman';

    return new Bowman(character, type);
  }

  expect(createCharacter).toThrowError('Недопустимая длина имени');
});

test('Ошибка при неправильно указанном типе', () => {
  function createCharacter() {
    const character = '12345';
    const type = 'Bowerman';

    return new Bowman(character, type);
  }

  expect(createCharacter).toThrowError('Тип указан неправильно');
});

test('Создание Bowman', () => {
  const character = '12345';
  const type = 'Bowman';

  const expected = {
    name: '12345',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newCharacter = new Bowman(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Swordsman', () => {
  const character = '12345';
  const type = 'Swordsman';

  const expected = {
    name: '12345',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newCharacter = new Swordsman(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Magician', () => {
  const character = '12345';
  const type = 'Magician';

  const expected = {
    name: '12345',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newCharacter = new Magician(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Undead', () => {
  const character = '12345';
  const type = 'Undead';

  const expected = {
    name: '12345',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newCharacter = new Undead(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Zombie', () => {
  const character = '12345';
  const type = 'Zombie';

  const expected = {
    name: '12345',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newCharacter = new Zombie(character, type);

  expect(newCharacter).toEqual(expected);
});

test('Создание Daemon', () => {
  const character = '12345';
  const type = 'Daemon';

  const expected = {
    name: '12345',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newCharacter = new Daemon(character, type);

  expect(newCharacter).toEqual(expected);
});
