import { FALL_DEATH, JUMP_FORCE, SPEED } from '../constants/player';
import { PLATFORMER_LEVELS, PLATFORMER_LEVEL_CONF } from '../constants/platformer';
import './transition';
import gameState from '../engine/state';
import { GameObj } from 'kaboom';
import { Trophies, WORLDS_CONFIG } from '../constants/levels';
import patrol from '../components/ennemies/patrol';
import addBackground from '../components/background';
import { TEXT } from '../constants/style';
import addCoinText from '../components/add_coin_text';
import { TILE_SIZE } from '../constants/sprite';
import goAnim from '../components/go_anim';

const platformer = (levelId = 0) => {
  addBackground(true);

  const { music, claimableTrophy } = gameState;
  const {
    sprites: { thrashMob },
    levelColor,
    dialogs,
  } = WORLDS_CONFIG[claimableTrophy];

  if (music?.isStopped) {
    music?.play();
    music.loop();
  }

  const levels = PLATFORMER_LEVELS[claimableTrophy];

  const execLoseRoutine = () => {
    player.flipY(true);
    player.play('hurt');
    player.jump();
    play('lemon_hurt', { detune: rand(-1000, 1000) });

    wait(0.4, () => {
      destroy(player);
      go('gameover', 'levels');
      gameState.loseCoins();
      music?.stop();
    });
  };

  gravity(3200);

  const mark = [
    //
    sprite('mark', { anim: 'idle' }),
    pos(TILE_SIZE, 0),
    area({ scale: 0.9 }),
    scale(2),
    body(),
    // @ts-ignore
    origin('center'),
    'mark',
    { dir: RIGHT },
  ];

  addLevel(levels[levelId ?? 0], {
    ...PLATFORMER_LEVEL_CONF,
    p: () => mark,
    '=': () => [
      sprite('ground'),
      area(),
      solid(),
      // @ts-ignore
      origin('center'),
      color(levelColor),
      'ground',
    ],
    '|': () => [
      sprite('singleGround'),
      area(),
      color(levelColor),
      // @ts-ignore
      origin('center'),
      solid(),
      'wall',
    ],
    '>': () => [
      //
      sprite(thrashMob, { anim: 'active' }),
      area({ shape: 'circle' }),
      // @ts-ignore
      origin('center'),
      scale(4),
      body(),
      color(levelColor),
      patrol({ speed: rand(60, 80), dir: choose([-1, 1]) }),
      'enemy',
    ],
    $: () => [
      //
      sprite(claimableTrophy),
      scale(4),
      // @ts-ignore
      origin('center'),
      area(),
      'coin',
    ],
  });

  const player = get('mark')[0] || add(mark);

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
      go('dialog', dialogs.beforeBoss, () => goAnim('battle'));
    }
  });

  player.onGround((l) => {
    if (l.is('enemy')) {
      player.jump(JUMP_FORCE * 1.2);
      destroy(l);
      // @ts-ignore
      addKaboom(player.pos);
    }
  });

  player.onCollide('enemy', (_: any, col: { isBottom: () => boolean }) => {
    // @XXX: if it's not from the top, die
    if (!col.isBottom()) {
      execLoseRoutine();
    }
  });

  player.onCollide('coin', (c: GameObj) => {
    play('click', { detune: rand(-1000, 1000) });
    destroy(c);
    addCoinText(c.pos);
    gameState.addCoin();
    coinsLabel.text = String(gameState.coins);
  });

  const coinsBox = add([
    //
    rect(30, 50, { radius: 5 }),
    outline(4, levelColor),
    color(BLACK),
    pos(24, 24),
    fixed(),
    z(1),
  ]);

  const coinsLabel = add([
    //
    text(String(gameState.coins), TEXT),
    pos(coinsBox.pos.x + 10, coinsBox.pos.y + 9),
    fixed(),
    z(2),
  ]);

  onUpdate(() => {
    coinsBox.width = coinsLabel.width + 20;
  });

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
    player.dir = LEFT;
    player.move(-SPEED, 0);
    player.flipX(true);
  });

  onKeyDown('right', () => {
    player.dir = RIGHT;
    player.move(SPEED, 0);
    player.flipX(false);
  });

  onKeyPress('down', () => {
    player.weight = 3;
  });

  onKeyRelease('down', () => {
    player.weight = 1;
  });
};

scene('platformer', platformer);
