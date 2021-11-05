import { directions, keys } from "../utilities/directions";

export default class Character {

  constructor(character) {
    this.held_directions = [];
    this.listeners();
    this.position = {
      x: 0,
      y: 0
    };
    this.speed = 1;
    this.pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    this.character = character;
  }

  update() {
    let held_direction = this.held_directions[0];
    if (held_direction) {
      switch (held_direction) {
        case directions.right:
          this.position.x += this.speed;
          break;
        case directions.left:
          this.position.x -= this.speed;
          break;
        case directions.down:
          this.position.y += this.speed;
          break;
        case directions.up:
          this.position.y -= this.speed;
          break;
      }
      this.character.setAttribute('facing', held_direction);
    }
    this.character.setAttribute('walking', held_direction ? 'true' : 'false');
    this.character.style.transform = `translate3d(${this.position.x * this.pixelSize}px,
    ${this.position.y * this.pixelSize}px, 0)`;
  }

  getPosition() {
    return this.position;
  }

  listeners() {
    const self = this;
    document.addEventListener('keydown', (event) => {
      const direction = keys[event.which];
      if (direction && self.held_directions.indexOf(direction) === -1) {
        self.held_directions.unshift(direction);
      }
    });

    document.addEventListener('keyup', (event) => {
      const direction = keys[event.which];
      const index = self.held_directions.indexOf(direction);
      if (index > -1) {
        self.held_directions.splice(index, 1);
      }
    });
  }

  render() {
  }
}
