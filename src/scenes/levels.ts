import { GameObj } from 'kaboom';
import { FRUITS_SIZE, TROPHY_TEXT_SIZE, TROPHY_TEXT_WIDTH } from '../constants/sprite';
import { ANIM_TEXT, TEXT } from '../constants/style';
import { GameState } from '../types/game';
import './game';
import './platformer';

const LEVELS = ['lemonBoss', 'orangeBoss', 'strawberryBoss', 'cherryBoss'];

const levels = ({ trophies, coins, music }: GameState = { trophies: [], coins: 0 }) => {
  layers(['background', 'ui'], 'ui');

  let activeLevel = add([{ level: '' }]);
  let levels = LEVELS.filter((l) => !trophies.includes(l));

  add([
    sprite('background'),
    pos(center()),
    // @ts-ignore
    origin('center'),
    layer('background'),
    opacity(0.1),
  ]);

  add([
    text('Fruits saved: ', {
      size: TROPHY_TEXT_SIZE,
      width: TROPHY_TEXT_WIDTH,
    }),
    pos(0, 10),
    fixed(),
  ]);

  for (let i = 0; i < trophies.length; i++) {
    add([sprite(trophies[i]), scale(2), pos((FRUITS_SIZE * 2 + 2) * i + 10 + TROPHY_TEXT_WIDTH, 10), fixed()]);
  }

  let bossBox;
  for (const level of levels) {
    const index = levels.findIndex((l) => l === level) + 1;

    let levelPos = center();
    let dir = UP;
    let levelId = 'lemon';
    switch (index) {
      case 1:
        levelPos = vec2(center().x, center().y - 120);
        dir = UP;
        levelId = 'lemon';
        break;
      case 2:
        levelPos = vec2(center().x + 120, center().y);
        dir = RIGHT;
        levelId = 'orange';
        break;
      case 3:
        levelPos = vec2(center().x, center().y + 120);
        dir = DOWN;
        levelId = 'strawberry';
        break;
      case 4:
        levelPos = vec2(center().x - 120, center().y);
        dir = LEFT;
        levelId = 'cherry';
        break;
    }

    bossBox = add([
      rect(100, 100, { radius: 5 }),
      color(255, 255, 255),
      outline(5, BLACK),
      // @ts-ignore
      origin('center'),
      pos(levelPos),
      opacity(1),
      'level',
      levelId,
      { dir, level: levelId },
    ]);

    // @ts-ignore
    add([pos(bossBox.pos), sprite(level), scale(5), origin('center')]);
  }

  add([
    //
    text('select', { ...TEXT, size: 18, width: 100 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, center().y - 20),
  ]);

  add([
    //
    text('stage', { ...TEXT, size: 18, width: 100 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, center().y + 20),
  ]);

  add([
    //
    text('use arrow keys', { ...ANIM_TEXT, size: 18 }),
    // @ts-ignore
    origin('center'),
    pos(center().x, height() - 50),
  ]);

  function findLevelAtDirection(dir: 'up' | 'right' | 'down' | 'left') {
    let level;
    switch (dir) {
      case 'up':
        level = get('lemon')[0];
        break;
      case 'right':
        level = get('orange')[0];
        break;
      case 'down':
        level = get('strawberry')[0];
        break;
      case 'left':
        level = get('cherry')[0];
        break;
    }

    return level;
  }

  function resetLevelStyle() {
    every('level', (level) => {
      level.opacity = 0.2;
      level.scale = 1;
    });
  }

  function activeLevelStyle(level?: GameObj) {
    play('click');
    if (level) {
      level.opacity = 1;
      level.scale = 1.2;
      activeLevel = level;
    }
  }

  resetLevelStyle();

  onKeyPress('up', () => {
    resetLevelStyle();
    const currentLevel = findLevelAtDirection('up');
    activeLevelStyle(currentLevel);
  });

  onKeyPress('right', () => {
    resetLevelStyle();
    const currentLevel = findLevelAtDirection('right');
    activeLevelStyle(currentLevel);
  });

  onKeyPress('down', () => {
    resetLevelStyle();
    const currentLevel = findLevelAtDirection('down');
    activeLevelStyle(currentLevel);
  });

  onKeyPress('left', () => {
    resetLevelStyle();
    const currentLevel = findLevelAtDirection('left');
    activeLevelStyle(currentLevel);
  });

  onKeyPress('space', () => {
    music?.stop();
    go('platformer', { trophy: activeLevel.level, levelId: 0, trophies, coins, music: play('platform') });
  });
};

scene('levels', levels);
