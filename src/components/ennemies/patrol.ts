import { GameObj } from 'kaboom';

type Options = {
  speed: number;
  dir: number;
  player?: GameObj;
};

export default function patrol(options: Options) {
  return {
    id: 'patrol',
    require: ['pos', 'area'],
    add() {
      this.on('collide', (obj, col) => {
        if (col.isLeft() || col.isRight()) {
          options.dir = -options.dir;
        }
      });
    },
    update() {
      this.move(options.speed * options.dir, 0);
    },
  };
}
