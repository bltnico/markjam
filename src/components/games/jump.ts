import { GameOptions } from '.';
import { FRUITS_SIZE, MARK_SIZE, TILE_SIZE } from '../../constants/sprite';
import battleUi from '../battle_ui';
import gameGround from '../game_ground';

const jump = ({ levelColor, sprites, onWin, onLose }: GameOptions) => {
  gameGround({ solid: true, levelColor });

  const onGameStart = () => {
    loop(rand(0.6, 1.2), () => {
      // prettier-ignore
      add([
        sprite(sprites.fruit),
        scale(3),
        area(),
        pos(width() - FRUITS_SIZE * 3, height() - TILE_SIZE - FRUITS_SIZE * 3),
        move(LEFT, rand(240, 260) * 2),
        'object',
      ]);
    });
  };

  battleUi({
    label: 'Jump !',
    levelColor,
    onStart: onGameStart,
    onTimeEnd: onWin,
  });

  add([rect(width(), 1), pos(0, height() - TILE_SIZE), opacity(0), solid(), area()]);

  // prettier-ignore
  const mark = add([
    sprite('mark', { anim: 'idle' }),
    scale(2),
    area(),
    body(),
    pos(MARK_SIZE * 2, height() - TILE_SIZE - MARK_SIZE),
    rotate(0),
    // @ts-ignore
    origin('center'),
  ]);

  onKeyPress('space', () => {
    if (mark.isGrounded()) {
      play('click');
      mark.jump(600);
      mark.use(sprite('mark', { anim: 'jump' }));
      mark.use(scale(2.5));
      wait(0.3, () => {
        mark.use(scale(2));
        mark.use(sprite('mark', { anim: 'idle' }));
      });
    }
  });

  mark.onCollide('object', () => {
    onLose();
  });
};

export default jump;
