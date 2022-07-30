import { GameObj } from 'kaboom';

import { SPEED } from '../../constants/player';
import { FRUITS_SIZE, MARK_SIZE } from '../../constants/sprite';
import battleUi from '../battle_ui';
import { GameOptions } from '.';

const collect = ({ onWin, onLose }: GameOptions) => {
  const onGameStart = () => {
    for (let i = 0; i < rand(2, 4); i++) {
      add([
        //
        sprite('lemon'),
        scale(3),
        area(),
        pos(rand(0, width() - FRUITS_SIZE * 3), rand(height() / 2, height() - FRUITS_SIZE * 3)),
        'object',
      ]);
    }
  };

  battleUi({
    label: 'Survive !',
    onStart: onGameStart,
    onTimeEnd: onWin,
  });

  const mark = add([
    sprite('mark'),
    scale(2),
    area(),
    pos(rand(0, width() - MARK_SIZE * 2), MARK_SIZE * 2),
    rotate(0),
    // @ts-ignore
    origin('center'),
  ]);

  onKeyDown('up', () => {
    mark.move(0, -SPEED * 2);
    mark.angle -= 20;
    if (mark.pos.y < 0) {
      mark.pos.y = 0;
    }
  });

  onKeyDown('down', () => {
    mark.move(0, SPEED * 2);
    mark.angle += 20;
    if (mark.pos.y > height()) {
      mark.pos.y = height();
    }
  });

  onKeyDown('left', () => {
    mark.move(-SPEED * 2, 0);
    mark.angle -= 20;
    if (mark.pos.x < 0) {
      mark.pos.x = 0;
    }
  });

  onKeyDown('right', () => {
    mark.move(SPEED * 2, 0);
    mark.angle += 20;
    if (mark.pos.x > width()) {
      mark.pos.x = width();
    }
  });

  onUpdate(() => {
    every('object', (el: GameObj) => {
      if (mark.exists()) {
        const dir = mark.pos.sub(el.pos).unit();
        el.move(dir.scale(SPEED / rand(1.2, 1.5)));
      }
    });
  });

  mark.onCollide('object', () => {
    play('click');
    destroy(mark);
    onLose();
  });
};

export default collect;
