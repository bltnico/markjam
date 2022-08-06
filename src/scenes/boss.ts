import addBackground from '../components/background';
import goAnim from '../components/go_anim';
import { FINAL_BOSS_SPRITE, WORLDS_CONFIG } from '../constants/levels';
import { FRUITS_SIZE, MARK_SIZE } from '../constants/sprite';
import battle from '../engine/battle';
import gameState from '../engine/state';

const boss = (success: boolean) => {
  addBackground();

  const { claimableTrophy, isFinalBoss } = gameState;

  for (let i = 0; i < battle.playerHp; i++) {
    add([
      //
      sprite('mark'),
      pos((MARK_SIZE * 1.5 + 2) * i + 20, 20),
      scale(1.5),
      fixed(),
    ]);
  }

  const bossSprite = isFinalBoss ? FINAL_BOSS_SPRITE : WORLDS_CONFIG[claimableTrophy].sprites.boss;

  for (let i = 0; i < battle.bossHp; i++) {
    add([
      //
      sprite(bossSprite, { width: MARK_SIZE * 1.5 }),
      pos(width() - FRUITS_SIZE * 3 * i - 2 - FRUITS_SIZE * 3 - 10, 20),
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

  const boss = add([
    sprite(bossSprite, { anim: success ? 'hurt' : 'idle' }),
    scale(isFinalBoss ? 1.5 : 5),
    pos(center()),
    // @ts-ignore
    origin('center'),
  ]);

  camPos(boss.pos);
  camScale(vec2(2, 2));

  wait(1.5, () => {
    goAnim('battle');
  });
};

scene('boss', boss);
