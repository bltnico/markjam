import { FRUITS_SIZE, MARK_SIZE } from '../constants/sprite';
import battle from '../engine/battle';

const boss = (success: boolean) => {
  for (let i = 0; i < battle.playerHp; i++) {
    add([
      //
      sprite('mark'),
      pos((MARK_SIZE + 2) * i + 10, 10),
      fixed(),
    ]);
  }

  for (let i = 0; i < battle.bossHp; i++) {
    add([
      //
      sprite('lemonMonster'),
      scale(2),
      pos(width() - FRUITS_SIZE * 2 * i - 2 - FRUITS_SIZE * 2, 10),
      fixed(),
    ]);
  }

  shake(10);
  // @ts-ignore
  const boss = add([sprite('lemonMonster', { anim: success ? 'hurt' : 'idle' }), scale(5), pos(center()), origin('center')]);
  camPos(boss.pos);
  camScale(vec2(2, 2));

  wait(1.5, () => {
    go('battle');
  });
};

scene('boss', boss);
