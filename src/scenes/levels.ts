import { GameObj } from 'kaboom';

import addBackground from '../components/background';
import { FRUITS_SIZE, TROPHY_TEXT_WIDTH } from '../constants/sprite';
import gameState from '../engine/state';
import { ANIM_TEXT, TEXT } from '../constants/style';
import './game';
import './platformer';
import { LEVELS, Trophies, WORLDS_CONFIG } from '../constants/levels';
import goAnim from '../components/go_anim';

const levels = () => {
  const { trophies } = gameState;
  let activeLevel = add([{ level: '' }]);

  layers(['background', 'ui'], 'ui');
  addBackground();

  const fruitsSaved = add([text('Fruits saved: ', { ...TEXT, size: 16 }), pos(20, 20), fixed()]);

  if (trophies.length === 0) {
    destroy(fruitsSaved);
  }

  for (let i = 0; i < trophies.length; i++) {
    add([sprite(trophies[i]), scale(2), pos(FRUITS_SIZE * 2 * i + 20 + TROPHY_TEXT_WIDTH, 15), fixed()]);
  }

  let bossBox;
  for (const level of LEVELS) {
    const levelPos = WORLDS_CONFIG[level].levelPos;
    const dir = WORLDS_CONFIG[level].dir;
    const levelId = WORLDS_CONFIG[level].id;
    const levelColor = WORLDS_CONFIG[level].levelColor;
    const bossSprite = WORLDS_CONFIG[level].sprites.boss;
    const saved = trophies.includes(levelId);

    bossBox = add([
      rect(100, 100, { radius: 5 }),
      color(255, 255, 255),
      outline(5, levelColor),
      // @ts-ignore
      origin('center'),
      pos(levelPos),
      'level',
      levelId,
      { dir, level: levelId, outlineColor: levelColor, saved },
    ]);

    // @ts-ignore
    add([pos(bossBox.pos), sprite(bossSprite), scale(5), origin('center'), `${levelId}-sprite`, 'level-sprite', { saved }]);
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
      level.color = level.saved ? level.outlineColor : rgb(127, 140, 141);
      level.scale = 1;
      level.use(outline(5, BLACK));
    });

    every('level-sprite', (levelSprite) => {
      levelSprite.scale = 4;
      levelSprite.play(levelSprite.saved ? 'death' : 'freeze');
    });
  }

  function activeLevelStyle(level?: GameObj) {
    play('click');
    if (level && !level.saved) {
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

    gameState.changeMusic(play('platform'));
    gameState.claimTrophy(activeLevel.level as Trophies);

    goAnim('platformer');
  });
};

scene('levels', levels);
