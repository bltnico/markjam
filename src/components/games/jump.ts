import { GameOptions } from '.';
import { FRUITS_SIZE, MARK_SIZE } from '../../constants/sprite';
import battleUi from '../battle_ui';

const jump = ({ onWin, onLose }: GameOptions) => {
  const onGameStart = () => {
    loop(rand(0.6, 1.2), () => {
      // prettier-ignore
      add([
        sprite('lemon'),
        scale(3),
        area(),
        pos(width() - FRUITS_SIZE * 3, height() / 2 - FRUITS_SIZE * 3),
        move(LEFT, rand(240, 260) * 2),
        'object',
      ]);
    });
  };

  battleUi({
    label: 'Jump !',
    onStart: onGameStart,
    onTimeEnd: onWin,
  });

  add([rect(width(), 1), pos(0, height() / 2), solid(), area()]);

  // prettier-ignore
  const mark = add([
    sprite('mark'),
    scale(2),
    area(),
    body(),
    pos(MARK_SIZE * 2, height() / 2 - MARK_SIZE),
    rotate(0),
    // @ts-ignore
    origin('center'),
  ]);

  onKeyPress('space', () => {
    if (mark.isGrounded()) {
      play('click');
      mark.jump(600);
    }
  });

  mark.onCollide('object', () => {
    onLose();
  });
};

export default jump;
