import { GameObj } from 'kaboom';
import addBackground from '../components/background';
import { FRUITS_SIZE, TROPHY_TEXT_SIZE, TROPHY_TEXT_WIDTH } from '../constants/sprite';
import { ANIM_TEXT, TEXT } from '../constants/style';
import { GameState } from '../types/game';
import './game';
import './platformer';

const LEVELS = ['lemonBoss', 'orangeBoss', 'strawberryBoss', 'cherryBoss'];

const levels = ({ trophies, coins, music }: GameState = { trophies: [], coins: 0 }) => {
  layers(['background', 'ui'], 'ui');
  addBackground();

  let activeLevel = add([{ level: '' }]);
  let levels = LEVELS.filter((l) => !trophies.includes(l));

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
    let levelColor = rgb(0, 0, 0);

    switch (index) {
      case 1:
        levelPos = vec2(center().x, center().y - 120);
        dir = UP;
        levelId = 'lemon';
        levelColor = rgb(226, 204, 91);
        break;
      case 2:
        levelPos = vec2(center().x + 120, center().y);
        dir = RIGHT;
        levelId = 'orange';
        levelColor = rgb(239, 137, 62);
        break;
      case 3:
        levelPos = vec2(center().x, center().y + 120);
        dir = DOWN;
        levelId = 'strawberry';
        levelColor = rgb(209, 49, 51);
        break;
      case 4:
        levelPos = vec2(center().x - 120, center().y);
        dir = LEFT;
        levelId = 'cherry';
        levelColor = rgb(254, 48, 130);
        break;
    }

    bossBox = add([
      rect(100, 100, { radius: 5 }),
      color(255, 255, 255),
      outline(5, levelColor),
      // @ts-ignore
      origin('center'),
      pos(levelPos),
      'level',
      levelId,
      { dir, level: levelId, outlineColor: levelColor },
    ]);

    // @ts-ignore
    add([pos(bossBox.pos), sprite(level), scale(5), origin('center'), `${levelId}-sprite`, 'level-sprite']);
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
    text('use arrow keys and press space to start', { ...ANIM_TEXT, size: 18 }),
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
      level.color = rgb(127, 140, 141);
      level.scale = 1;
      level.use(outline(5, BLACK));
    });

    every('level-sprite', (levelSprite) => {
      levelSprite.scale = 4;
      levelSprite.play('freeze');
    });
  }

  function activeLevelStyle(level?: GameObj) {
    play('click');
    if (level) {
      level.color = rgb(255, 255, 255);
      level.scale = 1.2;
      level.use(outline(5, level.outlineColor));
      activeLevel = level;

      const sprite = get(`${level.level}-sprite`)[0];
      if (sprite) {
        sprite.scale = 5;
        sprite.play('idle');
      }
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
    if (!activeLevel.level) {
      return;
    }

    music?.stop();
    go('platformer', { trophy: activeLevel.level, levelId: 0, trophies, coins, music: play('platform') });
  });
};

scene('levels', levels);
