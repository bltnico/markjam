import { SPEED } from '../constants/player';
import { test2 } from '../levels';

// @ts-ignore
const game = () => {
  addLevel(test2, {
    width: 32,
    height: 20,
    pos: vec2(0, 0),
    x: () => [rect(32,32), color(255, 0, 0), solid(), area(), 'walls'],
    b: () => [rect(32,32), color(0, 255, 0), solid(), area(), 'test'],
   });
  const player = add([
    pos(0, 0),
    sprite('mark'),
    scale(2),
    color(255, 255, 255),
    area(),
    body(),
    {
      speed: SPEED,
      dead: false,
    }
  ]);

  // add([rect(width() *2, 10), pos(0, height() - 10), color(255, 255, 255), solid(), area()]);

  onKeyPress('space', () => {
    if (player.isGrounded()) {
      player.jump();
    }
  });

  onKeyDown(['left', 'q'], () => {
    player.move(- player.speed, 0);
  });

  onKeyDown(['right', 'd'], () => {
    player.move(+ player.speed, 0);
  });

  player.onUpdate(() => {
    if (player.pos.x > width()) {
      camPos(vec2(Math.floor(1000 / width()) * width() + width() / 2, center().y));
    } else {
      camPos(center());
    }
  })
};

scene('game', game);
