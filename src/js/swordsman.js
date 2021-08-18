import Character from './сharacter';

export default class Swordsman extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 40;
    this.defence = 10;
  }
}
