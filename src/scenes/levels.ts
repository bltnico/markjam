import './game';

const max_levels = 4;

const levels = () => {
  let activeLevel: number = 0;

  function centerCamPos(target: number = 0) {
    camPos(vec2(get('level')[target].pos.x, get('level')[target].pos.y));
  }

  let i = 0;
  for (i; i < max_levels; i++) {
    const x = 50 * 2 * (i + 1);
    add([pos(x, 0), rect(50, 50), color(255, 255, 255), 'level']);
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
    every('level', (level) => level.use(color(255, 255, 255)));
    get('level')[activeLevel].use(color(255, 0, 0));
  });

  onKeyPress('space', () => {
    go('game');
  });
};

scene('levels', levels);
