import { GameObj } from 'kaboom';

import { GameOptions } from '.';
import { JUMP_FORCE, SPEED } from '../../constants/player';
import { FRUITS_SIZE, MARK_SIZE } from '../../constants/sprite';
import addCoinText from '../add_coin_text';
import battleUi from '../battle_ui';
import gameGround from '../game_ground';

const PLATFORM_COUNT = 4;
const PLATFORM_WIDTH = 200;

const climb = ({ levelColor, sprites, onWin, onLose }: GameOptions) => {
  gameGround({ solid: true, levelColor });

  gravity(4500);

  const onGameStart = () => {
    let i = 0;
    for (; i < PLATFORM_COUNT; i++) {
      add([
        // @ts-ignore
        rect(PLATFORM_WIDTH, 5, { radius: 5 }),
        color(levelColor),
        pos(rand(0, width() - PLATFORM_WIDTH), height() - 130 * (i + 1)),
        solid(),
        area(),
        { dir: choose([-1, 1]) },
        'platform',
        `id-${i + 1}`,
      ]);

      const lastPlatform = get('id-4')[0];
      if (lastPlatform) {
        add([
          //
          sprite(sprites.fruit),
          scale(3),
          area(),
          pos(lastPlatform.pos.x, lastPlatform.pos.y - FRUITS_SIZE * 3 - 10),
          'object',
        ]);
      }
    }
  };

  battleUi({
    label: 'Climb !',
    levelColor,
    onStart: onGameStart,
    onTimeEnd: onLose,
  });

  add([rect(width(), 1), pos(0, height() - 1), opacity(0), solid(), area()]);

  // prettier-ignore
  const mark = add([
    sprite('mark', { anim: 'idle' }),
    scale(2),
    area(),
    body(),
    pos(MARK_SIZE * 2, height() / 2 - MARK_SIZE),
    rotate(0),
    // @ts-ignore
    origin('center'),
    'mark',
  ]);

  onUpdate(() => {
    every('platform', (el: GameObj) => {
      const x = el.dir < 0 ? rand(-SPEED, -SPEED / 3) : rand(SPEED / 3, SPEED);
      el.move(x, 0);

      if (el.pos.x < 0) {
        el.dir = 1;
      }

      if (el.pos.x > width() - PLATFORM_WIDTH) {
        el.dir = -1;
      }
    });
  });

  onKeyDown('left', () => {
    mark.move(-SPEED, 0);
    mark.flipX(true);
    if (mark.pos.x < 0) {
      mark.pos.x = 0;
    }
  });

  onKeyDown('right', () => {
    mark.move(SPEED, 0);
    mark.flipX(false);
    if (mark.pos.x > width()) {
      mark.pos.x = width();
    }
  });

  onKeyPress('space', () => {
    if (mark.isGrounded()) {
      play('click');
      mark.jump(JUMP_FORCE);
    }
  });

  mark.onCollide('object', (el: GameObj) => {
    addCoinText(el.pos);
    destroy(el);
    wait(0.3, () => {
      onWin();
    });
  });
};

export default climb;
