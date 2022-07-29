import { FRUITS_SIZE } from '../constants/sprite';
import './game';

const max_levels = 4;

const LEVELS = ['lemon', 'orange', 'strawberry', 'cherry'];

const levels = () => {
  let activeLevel: number = 0;

  function centerCamPos(target: number = 0) {
    camPos(vec2(get('level')[target].pos.x, get('level')[target].pos.y));
  }

  let i = 0;
  for (i; i < max_levels; i++) {
    // fruits size * scale * spacing + pos index
    const x = FRUITS_SIZE * 3 * 2.5 * (i + 1);
    // @ts-ignore
    add([pos(x, 0), sprite(LEVELS[i]), scale(3), color(255, 255, 255), origin('center'), 'level']);
  }

  centerCamPos();

  onKeyPressRepeat('right', () => {
    if (activeLevel + 1 >= max_levels) {
      activeLevel = max_levels - 1;
    } else {
      activeLevel++;
    }

    centerCamPos(activeLevel);
  });

  onKeyPressRepeat('left', () => {
    activeLevel--;
    if (activeLevel < 0) {
      activeLevel = 0;
    }

    centerCamPos(activeLevel);
  });

  onUpdate('level', () => {
    every('level', (level) => level.use(scale(3)));
    get('level')[activeLevel].use(scale(5));
  });

  onKeyPress('space', () => {
    go('game');
  });
};

scene('levels', levels);
