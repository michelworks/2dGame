export default class Game {
  constructor(game, mainmenu, settings, camera) {
    this.game = game;
    this.settings = settings;
    this.mainMenu = mainmenu;
    this.isStarted = true;
    this.camera = camera;


  }

  _listeners() {

  }

  isStarted() {
    return this.isStarted;
  }

  settings() {
    this.isStarted = false;
  }

  mainMenu() {
    this.isStarted = false;
  }

  start() {
    this.isStarted = true;
  }

  update(time_step) {

  }

  render(time_step) {

  }
}
