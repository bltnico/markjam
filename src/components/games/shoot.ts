import { GameObj } from 'kaboom';

import { SPEED } from '../../constants/player';
import battleUi from '../battle_ui';
import { GameOptions } from '.';
import { FRUITS_SIZE, MARK_SIZE, TILE_SIZE } from '../../constants/sprite';
import gameGround from '../game_ground';

const shoot = ({ levelColor, sprites, onWin, onLose }: GameOptions) => {
  gameGround({ solid: true, levelColor });

  const onGameStart = () => {
    add([
      sprite(sprites.fruit),
      scale(3),
      area(),
      pos(rand(0, width()), FRUITS_SIZE * 5),
      'object',
      { dir: choose([-1, 1]), speed: SPEED * 5 },
    ]);
  };

  battleUi({
    label: 'Shoot !',
    levelColor,
    onStart: onGameStart,
    onTimeEnd: onLose,
  });

  const mark = add([
    sprite('mark', { anim: 'idle' }),
    scale(2),
    area(),
    pos(width() / 2 - MARK_SIZE, height() - TILE_SIZE - MARK_SIZE),
    rotate(0),
    // @ts-ignore
    origin('center'),
  ]);

  onUpdate(() => {
    every('object', (el: GameObj) => {
      const x = el.dir < 0 ? -el.speed : el.speed;
      el.move(x, 0);

      if (el.pos.x < 0) {
        el.dir = 1;
        el.speed = rand(SPEED * 5, SPEED * 7);
      }

      if (el.pos.x > width() - FRUITS_SIZE * 3) {
        el.dir = -1;
        el.speed = rand(SPEED * 5, SPEED * 7);
      }
    });
  });

  onKeyPress('space', () => {
    add([
      // @ts-ignore
      rect(10, 10, { radius: 10 }),
      area(),
      pos(mark.pos),
      // @ts-ignore
      origin('center'),
      color(levelColor),
      move(UP, SPEED * 5),
      cleanup(),
      'bullet',
    ]);
  });

  onCollide('bullet', 'object', (b: GameObj, o: GameObj) => {
    destroy(b);
    destroy(o);
    onWin();
  });
};

export default shoot;
