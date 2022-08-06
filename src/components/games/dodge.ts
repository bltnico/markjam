import { GameObj } from 'kaboom';

import { SPEED } from '../../constants/player';
import battleUi from '../battle_ui';
import { GameOptions } from '.';
import gameGround from '../game_ground';
import { MARK_SIZE, TILE_SIZE } from '../../constants/sprite';

const dodge = ({ levelColor, sprites, onWin, onLose }: GameOptions) => {
  gameGround({ solid: false, levelColor });

  const onGameStart = () => {
    wait(0.3, () => {
      loop(rand(0.1, 0.2), () => {
        add([sprite(sprites.fruit), scale(3), body(), area(), pos(rand(0, width()), 0), cleanup(), 'object']);
      });
    });
  };

  battleUi({
    label: 'Dodge !',
    levelColor,
    onStart: onGameStart,
    onTimeEnd: onWin,
  });

  // @ts-ignore
  const mark = add([sprite('mark', { anim: 'idle' }), scale(2), area(), pos(height() - TILE_SIZE - MARK_SIZE), rotate(0), origin('center'), health(1)]);

  onKeyDown('left', () => {
    mark.move(-SPEED * 3, 0);
    mark.flipX(true);
    if (mark.pos.x < 0) {
      mark.pos.x = 0;
    }
  });

  onKeyDown('right', () => {
    mark.move(SPEED * 3, 0);
    mark.flipX(false);
    if (mark.pos.x > width()) {
      mark.pos.x = width();
    }
  });

  mark.onCollide('object', (el: GameObj) => {
    destroy(el);
    mark.hurt();
  });

  mark.onDeath(() => {
    destroy(mark);
    onLose();
  });
};

export default dodge;
