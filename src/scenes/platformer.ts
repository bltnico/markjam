import { FALL_DEATH, JUMP_FORCE, SPEED } from '../constants/player';
import { PlatformerState } from '../types/game';
import { PLATFORMER_LEVELS, PLATFORMER_LEVEL_CONF } from '../constants/platformer';
import './transition';

const platformer = (state: PlatformerState = { trophy: 'lemon', levelId: 0, coins: 0, trophies: [] }) => {
  let _coins = state.coins;

  const { trophies, trophy, levelId, music } = state;
  const gameState = { trophies, music };

  if (music?.isStopped) {
    music?.play();
    music.loop();
  }

  const levels = PLATFORMER_LEVELS[trophy];

  const execLoseRoutine = () => {
    player.use(sprite('mark', { anim: 'hurt' }));
    wait(0.5, () => {
      go('transition', 'You Lose', () => go('platformer', state));
      music?.stop();
    });
  };

  gravity(3200);

  addLevel(levels[levelId ?? 0], {
    ...PLATFORMER_LEVEL_CONF,
    $: () => [sprite(trophy), scale(4), area(), pos(0, -9), origin('bot'), 'coin'],
  });

  const player = add([sprite('mark', { anim: 'idle' }), pos(0, 0), area(), scale(2), body(), origin('bot')]);

  player.onUpdate(() => {
    camPos(player.pos);

    if (player.pos.y >= FALL_DEATH) {
      execLoseRoutine();
    }
  });

  player.onCollide('danger', () => {
    execLoseRoutine();
  });

  player.onCollide('portal', () => {
    if (levelId + 1 < levels.length) {
      go('platformer', {
        ...state,
        coins: _coins,
        levelId: levelId + 1,
      });
    } else {
      // @XXX : Levels all completed
      music?.stop();
      go('battle', { ...gameState, trophy, coins: _coins });
    }
  });

  player.onGround((l) => {
    if (l.is('enemy')) {
      player.jump(JUMP_FORCE * 1.5);
      destroy(l);
      addKaboom(player.pos);
    }
  });

  player.onCollide('enemy', (_: any, col: { isBottom: () => boolean }) => {
    // @XXX: if it's not from the top, die
    if (!col.isBottom()) {
      execLoseRoutine();
    }
  });

  player.onCollide('coin', (c) => {
    destroy(c);
    _coins += 1;
    coinsLabel.text = String(_coins);
  });

  const coinsLabel = add([text(String(_coins)), pos(24, 24), fixed()]);

  // @XXX jump
  onKeyPress('space', () => {
    if (player.isGrounded()) {
      player.use(sprite('mark', { anim: 'jump' }));
      player.use(scale(2.5));
      player.jump(JUMP_FORCE);
      wait(0.3, () => {
        player.use(scale(2));
        player.use(sprite('mark', { anim: 'idle' }));
      });
    }
  });

  // @XXX base move
  onKeyDown('left', () => {
    player.move(-SPEED, 0);
  });

  onKeyDown('right', () => {
    player.move(SPEED, 0);
  });

  onKeyPress('down', () => {
    player.weight = 3;
  });

  onKeyRelease('down', () => {
    player.weight = 1;
  });
};

scene('platformer', platformer);
