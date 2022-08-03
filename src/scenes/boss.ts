import { FRUITS_SIZE, MARK_SIZE } from '../constants/sprite';
import battle from '../engine/battle';
import { BattleState } from '../types/game';

const boss = (success: boolean, battleState: BattleState) => {
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
      sprite('lemonBoss'),
      scale(2),
      pos(width() - FRUITS_SIZE * 2 * i - 2 - FRUITS_SIZE * 2, 10),
      fixed(),
    ]);
  }

  if (success) {
    play('lemon_hurt');
  }

  if (!success) {
    play('lemon_taunt');
  }

  shake(10);
  // @ts-ignore
  const boss = add([sprite('lemonBoss', { anim: success ? 'hurt' : 'idle' }), scale(5), pos(center()), origin('center')]);
  camPos(boss.pos);
  camScale(vec2(2, 2));

  wait(1.5, () => {
    go('battle', battleState);
  });
};

scene('boss', boss);
