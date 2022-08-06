import { GameObj } from 'kaboom';

import { SPEED } from '../../constants/player';
import { FRUITS_SIZE, MARK_SIZE } from '../../constants/sprite';
import battleUi from '../battle_ui';
import { GameOptions } from '.';
import addCoinText from '../add_coin_text';

const collect = ({ levelColor, sprites, onWin, onLose }: GameOptions) => {
  const onGameStart = () => {
    for (let i = 0; i < target; i++) {
      wait(0.5 * i, () => {
        add([
          sprite(sprites.fruit),
          scale(3),
          area(),
          pos(rand(0, width() - FRUITS_SIZE * 3), rand(0, height() - FRUITS_SIZE * 3)),
          'object',
        ]);
      });
    }
  };

  battleUi({
    label: 'Collect !',
    levelColor,
    onStart: onGameStart,
    onTimeEnd: onLose,
  });

  const target = 7;
  let catched = 0;

  const mark = add([
    sprite('mark', { anim: 'idle' }),
    scale(2),
    area(),
    pos(rand(0, width() - MARK_SIZE * 2), rand(0, height() - MARK_SIZE * 2)),
    rotate(0),
    // @ts-ignore
    origin('center'),
  ]);

  onKeyDown('up', () => {
    mark.move(0, -SPEED * 2);
    if (mark.pos.y < 0) {
      mark.pos.y = 0;
    }
  });

  onKeyDown('down', () => {
    mark.move(0, SPEED * 2);
    if (mark.pos.y > height()) {
      mark.pos.y = height();
    }
  });

  onKeyDown('left', () => {
    mark.move(-SPEED * 2, 0);
    mark.flipX(true);
    if (mark.pos.x < 0) {
      mark.pos.x = 0;
    }
  });

  onKeyDown('right', () => {
    mark.move(SPEED * 2, 0);
    mark.flipX(false);
    if (mark.pos.x > width()) {
      mark.pos.x = width();
    }
  });

  mark.onCollide('object', (el: GameObj) => {
    play('click');
    addCoinText(el.pos);
    destroy(el);
    catched++;

    if (catched === target) {
      onWin();
    }
  });
};

export default collect;
