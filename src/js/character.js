export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defense = 25;
  }

  levelUp() {
    if (this.health === 0) {
      throw (new Error('Закопайте стюардессу'));
    }
    this.level += 1;
    this.attack += (this.attack / 100) * 20;
    this.defense += (this.defense / 100) * 20;
    this.health = 100;
  }
}
