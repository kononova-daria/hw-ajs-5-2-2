import Character from './сharacter';

export default class Magician extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 10;
    this.defence = 40;
  }
}
