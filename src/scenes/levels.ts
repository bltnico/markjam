import { FRUITS_SIZE } from '../constants/sprite';
import './game';
import './platformer';

const LEVELS = ['lemon', 'orange', 'strawberry', 'cherry'];

const levels = ({ trophies, coins }: { trophies: string[]; coins: number } = { trophies: [], coins: 0 }) => {
  let activeLevel: number = 0;
  let levels = LEVELS.filter(l => !trophies.includes(l));
  const music = play('dialogs');

  function centerCamPos(target: number = 0) {
    play('click');
    camPos(vec2(get('level')[target].pos.x, get('level')[target].pos.y));
  }

  for (const level of levels) {
    // fruits size * scale * spacing + pos index
    const x = FRUITS_SIZE * 3 * 2.5 * (levels.findIndex(l => l === level) + 1);
    // @ts-ignore
    add([pos(x, 0), sprite(level), scale(3), origin('center'), 'level']);
  }
  add([text(`trophies : ${trophies.join(', ')}`, { size: 30 }), pos(200, 0), origin('top')]);

  centerCamPos();

  onKeyPressRepeat('right', () => {
    if (activeLevel + 1 >= levels.length) {
      activeLevel = levels.length - 1;
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
    music.stop();
    go('platformer', { trophy: levels[activeLevel], levelId: 0, trophies, coins, music: play('platform') });
  });
};

scene('levels', levels);
