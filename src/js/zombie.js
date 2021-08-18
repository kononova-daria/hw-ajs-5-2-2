import Character from './сharacter';

export default class Zombie extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 40;
    this.defence = 10;
  }
}
