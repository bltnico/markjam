import { Color } from 'kaboom';

import { TILE_SIZE } from '../constants/sprite';

type Options = {
  solid?: boolean;
  levelColor?: Color;
};

function gameGround(options: Options = { solid: false, levelColor: BLACK }) {
  let delta = 0;
  let groundWidth = 0;

  while (groundWidth < width()) {
    const el = add([
      //
      sprite('ground'),
      pos(delta * TILE_SIZE, height() - TILE_SIZE),
      color(options.levelColor),
    ]);

    if (options.solid) {
      el.use(area());
      el.use(solid());
    }

    delta++;
    groundWidth += TILE_SIZE;
  }
}

export default gameGround;
