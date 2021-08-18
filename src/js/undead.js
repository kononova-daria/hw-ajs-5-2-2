import Character from './сharacter';

export default class Undead extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 25;
    this.defence = 25;
  }
}
