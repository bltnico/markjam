import { GameObj } from 'kaboom';

import { SPEED } from '../../constants/player';
import battleUi from '../battle_ui';
import { GameOptions } from '.';

const dodge = ({ onWin, onLose }: GameOptions) => {
  const onGameStart = () => {
    wait(0.3, () => {
      loop(rand(0.1, 0.2), () => {
        add([sprite('lemon'), scale(3), body(), area(), pos(rand(0, width()), 0), cleanup(), 'object']);
      });
    });
  };

  battleUi({
    label: 'Dodge !',
    onStart: onGameStart,
    onTimeEnd: onWin,
  });

  // @ts-ignore
  const mark = add([sprite('mark'), scale(2), area(), pos(height() - 64), rotate(0), origin('center'), health(1)]);

  onKeyDown('left', () => {
    mark.move(-SPEED * 3, 0);
    mark.angle -= 20;
    if (mark.pos.x < 0) {
      mark.pos.x = 0;
    }
  });

  onKeyDown('right', () => {
    mark.move(SPEED * 3, 0);
    mark.angle += 20;
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
