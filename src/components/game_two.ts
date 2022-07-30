import { GameObj } from 'kaboom';

import { SPEED } from '../constants/player';
import { FRUITS_SIZE, MARK_SIZE } from '../constants/sprite';

const gameTwo = (onEnd: () => void) => {
  const target = 7;
  let catched = 0;

  for (let i = 0; i < target; i++) {
    wait(0.5 * i, () => {
      add([
        sprite('lemon'),
        scale(3),
        area(),
        pos(rand(0, width() - FRUITS_SIZE * 3), rand(0, height() - FRUITS_SIZE * 3)),
        'object',
      ]);
    });
  }

  const mark = add([
    sprite('mark'),
    scale(2),
    area(),
    pos(rand(0, width() - MARK_SIZE * 2), rand(0, height() - MARK_SIZE * 2)),
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

  mark.onCollide('object', (el: GameObj) => {
    play('click');
    destroy(el);
    catched++;

    if (catched === target) {
      onEnd();
    }
  });
};

export default gameTwo;
