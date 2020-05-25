import Character from '../character';
// import Bowerman from '../bowerman';
// import Swordsman from '../swordsman';
// import Magician from '../magician';
// import Daemon from '../daemon';
// import Undead from '../undead';
// import Zombie from '../zombie';

test('Нельзя левелапнуть труп', () => {
  function result() {
    const char = new Character('corpse');
    char.health = 0;
    return char.levelUp();
  }
  expect(result).toThrow('Закопайте стюардессу');
});

test('Если левелапнуть живого персонажа, то он левелапнется', () => {
  const char = new Character('cat');
  char.levelUp();
  const result = char;
  expect(result).toEqual({
    attack: 30,
    defense: 30,
    health: 100,
    level: 2,
    name: 'cat',
  });
});

test('Если левелапнуть раненого персонажа, то он левелапнется', () => {
  const char = new Character('cat');
  char.health = 50;
  char.levelUp();
  const result = char;
  expect(result).toEqual({
    attack: 30,
    defense: 30,
    health: 100,
    level: 2,
    name: 'cat',
  });
});
