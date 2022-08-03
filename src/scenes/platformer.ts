import { FALL_DEATH, JUMP_FORCE, SPEED } from '../constants/player';
import { PLATFORMER_LEVELS, PLATFORMER_LEVEL_CONF } from '../constants/platformer';
import './transition';
import gameState from '../engine/state';
import { GameObj } from 'kaboom';
import { WORLDS_CONFIG } from '../constants/levels';
import patrol from '../components/ennemies/patrol';

const platformer = (levelId = 0) => {
  const { music, claimableTrophy } = gameState;
  const {
    sprites: { thrashMob },
    levelColor,
  } = WORLDS_CONFIG[claimableTrophy];
  if (music?.isStopped) {
    music?.play();
    music.loop();
  }

  const levels = PLATFORMER_LEVELS[claimableTrophy];

  const execLoseRoutine = () => {
    player.use(sprite('mark', { anim: 'hurt' }));
    wait(0.5, () => {
      go('transition', 'You Lose', () => go('platformer'));
      gameState.loseCoins();
      music?.stop();
    });
  };

  gravity(3200);

  addLevel(levels[levelId ?? 0], {
    ...PLATFORMER_LEVEL_CONF,
    '=': () => [
      rect(64, 64),
      sprite('ground'),
      area(),
      solid(),
      // origin('bot'),
      'ground',
      color(levelColor),
    ],
    '>': () => [sprite(thrashMob, { anim: 'active' }), area({ scale: 0.5 }), origin('bot'), scale(4), body(), patrol(), 'enemy'],
    $: () => [sprite(claimableTrophy), scale(4), area(), pos(0, -9), origin('bot'), 'coin'],
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
      go('platformer', levelId + 1);
    } else {
      // @XXX : Levels all completed
      music?.stop();
      go('battle');
    }
  });

  player.onGround((l) => {
    if (l.is('enemy')) {
      player.jump(JUMP_FORCE * 1.5);
      destroy(l);
      addKaboom(player.pos);
    }
  });

  // player.onCollide('enemy', (_: any, col: { isBottom: () => boolean }) => {
  //   // @XXX: if it's not from the top, die
  //   if (!col.isBottom()) {
  //     execLoseRoutine();
  //   }
  // });

  player.onCollide('coin', (c: GameObj) => {
    destroy(c);
    gameState.addCoin();
    coinsLabel.text = String(gameState.coins);
  });

  const coinsLabel = add([text(String(gameState.coins)), pos(24, 24), fixed()]);

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
