import Character from "./component/character";
import Enemies from "./component/enemies";
import Scenes from "./component/scenes";
import Engine from "./utilities/engine";
import Levels from "./component/levels";
import Game from "./game";

window.addEventListener('DOMContentLoaded', (event) => {

  const game_container = document.querySelector('.game');
  const mainmenu_container = game_container.querySelector('.main__menu');
  const settings_container = game_container.querySelector('.settings');
  const player = game_container.querySelector('.player');
  const map = game_container.querySelector('.map__scene');
  const character = new Character(player);
  const levels = new Levels([]);
  const scene = new Scenes(map);
  const enemies = new Enemies();
  const engine = new Engine((1000/30));
  const game = new Game(game_container, mainmenu_container, settings_container);

  console.log("hwuyt");

  const update =  () => {
    game.update();
    if (game.isStarted ) {
      levels.update();
      character.update();
      scene.setPosition(character.getPosition());
      scene.update();
      enemies.update();
    } else {
      engine.stop();
    }
  }

  const render = (time_step) => {
    game.render();

    if (game.isStarted ) {
      levels.render();
      scene.render();
      character.render();
      enemies.render();
    } else {
      engine.stop();
    }
  }

  engine.setUpdate(update);
  engine.setRender(render);
  engine.start();

});
